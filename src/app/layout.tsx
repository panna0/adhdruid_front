import type { Metadata, Viewport } from 'next';
import { Prociono } from 'next/font/google';
import './globals.scss';

const prociono = Prociono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-prociono',
});

export const metadata: Metadata = {
  title: {
    default: 'ADHDruid',
    template: '%s | ADHDruid',
  },
  description: 'ADHDruid — il tuo compagno di percorso',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={prociono.variable}>
      <body>{children}</body>
    </html>
  );
}
