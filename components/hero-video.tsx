import React from 'react';

const HeroVideo = () => {
  return (
    <section className="h-dvh snap-center bg-black">
      <div className="flex h-dvh items-center justify-center">
        <video
          className="h-2/5 w-full object-cover sm:h-5/6 sm:object-contain"
          autoPlay
          loop
          muted
          src="/videos/hero-video.mp4"
        />
      </div>
    </section>
  );
};

export default HeroVideo;
