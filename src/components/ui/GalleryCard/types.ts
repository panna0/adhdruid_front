export type GalleryCardItem = {
  title: string;
  description: string;
  image: string;
  /** Colore predominante della card — sostituisci liberamente per ogni item */
  color: string;
};

export type GalleryCardProps = GalleryCardItem & {
  className?: string;
  imageAlt?: string;
};
