import type { GalleryCardItem } from './types';

const CARD_WIDTH = 480;
const CARD_HEIGHT = 720;
const PADDING = 40;
const BORDER_RADIUS = 28;

type RenderOptions = {
  titleFont?: string;
  bodyFont?: string;
  subtitleFont?: string;
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

function splitLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let line = '';

  for (let i = 0; i < words.length; i++) {
    const testLine = line ? `${line} ${words[i]}` : words[i];
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = words[i];
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);

  return lines;
}

function drawLines(
  ctx: CanvasRenderingContext2D,
  lines: string[],
  x: number,
  y: number,
  lineHeight: number
): number {
  let currentY = y;
  for (const line of lines) {
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

  // Sfondo di base (blu molto scuro) in caso l'immagine non carichi.
  roundRect(ctx, 0, 0, CARD_WIDTH, CARD_HEIGHT, BORDER_RADIUS);
  ctx.save();
  ctx.clip();
  ctx.fillStyle = '#0a1128';
  ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

  // Immagine di sfondo a tutta card.
  try {
    const img = await loadImage(card.image);
    drawImageCover(ctx, img, 0, 0, CARD_WIDTH, CARD_HEIGHT);
  } catch {
    /* si mantiene lo sfondo di base */
  }

  // Overlay sfumato: trasparente in alto, blu scuro in basso (~55%).
  const overlay = ctx.createLinearGradient(0, 0, 0, CARD_HEIGHT);
  overlay.addColorStop(0.35, 'rgba(10, 17, 40, 0)');
  overlay.addColorStop(0.5, 'rgba(10, 17, 40, 0.35)');
  overlay.addColorStop(0.72, 'rgba(10, 17, 40, 0.85)');
  overlay.addColorStop(1, 'rgba(10, 17, 40, 1)');
  ctx.fillStyle = overlay;
  ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);
  ctx.restore();

  // ---- Testo allineato in basso ----
  const textX = PADDING;
  const textMaxWidth = CARD_WIDTH - PADDING * 2;

  const subtitleLH = 24;
  const titleLH = 42;
  const descLH = 27;
  const gapSubtitle = 12;
  const gapTitle = 16;

  const ctxLetter = ctx as CanvasRenderingContext2D & { letterSpacing?: string };
  const previousLetterSpacing = ctxLetter.letterSpacing;

  const subtitleFont = options.subtitleFont || '600 16px Prociono, serif';
  const titleFont = options.titleFont || 'bold 36px Sinistre, sans-serif';
  const bodyFont = options.bodyFont || '300 18px Prociono, serif';

  ctx.font = subtitleFont;
  const subtitleLines = splitLines(ctx, card.subtitle.toUpperCase(), textMaxWidth);
  ctx.font = titleFont;
  const titleLines = splitLines(ctx, card.title, textMaxWidth);
  ctx.font = bodyFont;
  const descLines = splitLines(ctx, card.description, textMaxWidth);

  const blockHeight =
    subtitleLines.length * subtitleLH +
    gapSubtitle +
    titleLines.length * titleLH +
    gapTitle +
    descLines.length * descLH;

  let textY = CARD_HEIGHT - PADDING - blockHeight + subtitleLH * 0.75;

  ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
  ctx.font = subtitleFont;
  try {
    ctxLetter.letterSpacing = '2.5px';
  } catch {
    /* letterSpacing non supportato */
  }
  textY = drawLines(ctx, subtitleLines, textX, textY, subtitleLH) + gapSubtitle;
  try {
    ctxLetter.letterSpacing = previousLetterSpacing ?? '0px';
  } catch {
    /* noop */
  }

  ctx.fillStyle = card.themeColor;
  ctx.font = titleFont;
  textY = drawLines(ctx, titleLines, textX, textY, titleLH) + gapTitle;

  ctx.fillStyle = 'rgba(255, 255, 255, 0.82)';
  ctx.font = bodyFont;
  drawLines(ctx, descLines, textX, textY, descLH);

  // Bordo esterno sottile e scuro.
  roundRect(ctx, 0.75, 0.75, CARD_WIDTH - 1.5, CARD_HEIGHT - 1.5, BORDER_RADIUS);
  ctx.strokeStyle = 'rgba(184, 200, 248, 0.12)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  return canvas;
}

export const GALLERY_CARD_TEXTURE_SIZE = {
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
};
