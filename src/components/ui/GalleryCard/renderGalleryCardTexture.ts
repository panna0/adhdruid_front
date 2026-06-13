import type { GalleryCardItem } from './types';

const CARD_WIDTH = 480;
const CARD_HEIGHT = 720;
const PADDING = 28;
const IMAGE_HEIGHT_RATIO = 0.62;
const BORDER_RADIUS = 24;
const IMAGE_RADIUS = 16;

type RenderOptions = {
  titleFont?: string;
  bodyFont?: string;
};

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawImageCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  w: number,
  h: number
) {
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const sw = img.naturalWidth * scale;
  const sh = img.naturalHeight * scale;
  const sx = x + (w - sw) / 2;
  const sy = y + (h - sh) / 2;
  ctx.drawImage(img, sx, sy, sw, sh);
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let i = 0; i < words.length; i++) {
    const testLine = line ? `${line} ${words[i]}` : words[i];
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = words[i];
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }

  if (line) {
    ctx.fillText(line, x, currentY);
    currentY += lineHeight;
  }

  return currentY;
}

export async function renderGalleryCardTexture(
  card: GalleryCardItem,
  options: RenderOptions = {}
): Promise<HTMLCanvasElement> {
  const canvas = document.createElement('canvas');
  canvas.width = CARD_WIDTH;
  canvas.height = CARD_HEIGHT;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not get 2d context');

  roundRect(ctx, 0, 0, CARD_WIDTH, CARD_HEIGHT, BORDER_RADIUS);
  ctx.fillStyle = card.color;
  ctx.fill();

  const imageX = PADDING;
  const imageY = PADDING;
  const imageWidth = CARD_WIDTH - PADDING * 2;
  const imageHeight = (CARD_HEIGHT - PADDING * 2) * IMAGE_HEIGHT_RATIO;

  try {
    const img = await loadImage(card.image);
    roundRect(ctx, imageX, imageY, imageWidth, imageHeight, IMAGE_RADIUS);
    ctx.save();
    ctx.clip();
    drawImageCover(ctx, img, imageX, imageY, imageWidth, imageHeight);
    ctx.restore();
  } catch {
    roundRect(ctx, imageX, imageY, imageWidth, imageHeight, IMAGE_RADIUS);
    ctx.fillStyle = 'rgba(18, 16, 43, 0.35)';
    ctx.fill();
  }

  const textX = PADDING;
  const textMaxWidth = CARD_WIDTH - PADDING * 2;
  let textY = imageY + imageHeight + PADDING + 8;

  ctx.fillStyle = '#b8c8f8';
  ctx.font = options.titleFont || 'bold 32px Sinistre, sans-serif';
  textY = wrapText(ctx, card.title, textX, textY, textMaxWidth, 36) + 8;

  ctx.fillStyle = 'rgba(184, 200, 248, 0.88)';
  ctx.font = options.bodyFont || '18px Prociono, serif';
  wrapText(ctx, card.description, textX, textY, textMaxWidth, 26);

  return canvas;
}

export const GALLERY_CARD_TEXTURE_SIZE = {
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
};
