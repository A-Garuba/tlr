'use client';

import Hero from '@/components/hero';
import Features from '@/components/features';
import Newsletter from '@/components/newsletter';
import Zigzag from '@/components/zigzag';
import Testimonials from '@/components/testimonials';
import HeroVideo from '@/components/hero-video';
import { useRef, useState } from 'react';
import Intro from '@/components/intro';
import Footer from '@/components/ui/footer';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [isEntered, setIsEntered] = useState(false);
  const handleEnter = () => setIsEntered(true);

  const scrollToHero = () =>
    heroRef.current?.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <>
      <main className="flex h-dvh snap-y snap-mandatory flex-col overflow-x-hidden overflow-y-scroll">
        {!isEntered ? (
          <Intro onEnter={handleEnter} />
        ) : (
          <>
            <HeroVideo onSkipPress={scrollToHero} />
            <Hero ref={heroRef} />
            {/* <Features /> */}
            <Zigzag />
            <Testimonials />
            <Newsletter />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
