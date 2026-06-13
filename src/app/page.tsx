import Hero from '@/components/home/Hero/Hero';
import Section from '@/components/home/Section/Section';
import HomeMenu from '@/components/layout/StaggeredMenu/HomeMenu';
import Footer from '@/components/layout/Footer/Footer';
import HomeGallery from '@/components/home/Section/HomeGallery';
import sectionStyles from '@/components/home/Section/Section.module.scss';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HomeMenu />
      <main>
        <Hero />
        <Section id="sezione-1" title="Collegamento ADHD e storia" />
        <Section id="sezione-2" title="Compinente Fisica" />
        <Section id="sezione-3" title="Componente digitale" />
        <Section
          id="sezione-4"
          title="Il Circolo dei Druidi"
          className={sectionStyles.sectionGallery}
        >
          <HomeGallery />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
