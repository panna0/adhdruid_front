'use client';

import { circularGalleryItems } from '@/components/home/Section/galleryConfig';
import type { GalleryCardItem } from '@/components/ui/GalleryCard/types';
import CircularGallery from '@/components/ui/CircularGallery/CircularGallery';
import GalleryCarousel from '@/components/ui/GalleryCarousel/GalleryCarousel';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './HomeGallery.module.scss';

type HomeGalleryProps = {
  items?: GalleryCardItem[];
};

const DESKTOP_MEDIA_QUERY = '(min-width: 1025px)';

export default function HomeGallery({ items = circularGalleryItems }: HomeGalleryProps) {
  const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);

  if (isDesktop === null) {
    return <div className={styles.placeholder} aria-hidden />;
  }

  if (isDesktop) {
    return (
      <div className={styles.desktop}>
        <CircularGallery
          items={items}
          bend={4.5}
          font="bold 30px Sinistre"
          bodyFont="22px Prociono"
        />
      </div>
    );
  }

  return (
    <div className={styles.mobile}>
      <GalleryCarousel items={items} />
    </div>
  );
}
