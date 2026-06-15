import Hero from '@/components/home/Hero/Hero';
import Intro from '@/components/home/Intro/Intro';
import Section from '@/components/home/Section/Section';
import FlipCards from '@/components/home/FlipCards/FlipCards';
import AppShowcase from '@/components/home/AppShowcase/AppShowcase';
import ParallaxCards from '@/components/home/ParallaxCards/ParallaxCards';
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
        <Intro />
        <ParallaxCards />
        <Section
          id="sezione-3"
          title=""
          className={sectionStyles.overlapPrev}
        >
          <AppShowcase />
        </Section>
        <Section
          id="sezione-4"
          title=""
          className={sectionStyles.sectionGallery}
        >
          <HomeGallery />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
