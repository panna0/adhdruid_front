'use client';

import GalleryCard from '@/components/ui/GalleryCard/GalleryCard';
import type { GalleryCardItem } from '@/components/ui/GalleryCard/types';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './GalleryCarousel.module.scss';

type GalleryCarouselProps = {
  items: GalleryCardItem[];
};

export default function GalleryCarousel({ items }: GalleryCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const trackRect = track.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;
      let closest = 0;
      let minDistance = Infinity;

      Array.from(track.children).forEach((child, index) => {
        const rect = child.getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(center - childCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.carousel} role="region" aria-label="Galleria card" aria-roledescription="carousel">
      <div className={styles.track} ref={trackRef}>
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={styles.slide}
            aria-hidden={activeIndex !== index}
          >
            <GalleryCard {...item} className={styles.card} />
          </div>
        ))}
      </div>

      <div className={styles.dots} role="tablist" aria-label="Seleziona card">
        {items.map((item, index) => (
          <button
            key={`dot-${item.title}-${index}`}
            type="button"
            role="tab"
            className={index === activeIndex ? styles.dotActive : styles.dot}
            onClick={() => scrollToIndex(index)}
            aria-label={`Vai a ${item.title}`}
            aria-selected={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
