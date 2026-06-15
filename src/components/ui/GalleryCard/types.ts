export type GalleryCardItem = {
  title: string;
  /** Breve sottotitolo / etichetta sopra o sotto al titolo */
  subtitle: string;
  description: string;
  image: string;
  /** Colore predominante della card — sostituisci liberamente per ogni item */
  color: string;
  /**
   * Colore tematico della card (hex, es. '#FF5733'): usato per il titolo
   * e per il bordo evidenziato all'hover.
   */
  themeColor: string;
};

export type GalleryCardProps = GalleryCardItem & {
  className?: string;
  imageAlt?: string;
};
