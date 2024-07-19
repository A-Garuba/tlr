import React from 'react';

const HeroVideo = () => {
  return (
    <section className="flex h-dvh snap-center items-center bg-black">
      <video
        className="w-full object-cover"
        autoPlay
        loop
        muted
        src="/videos/hero-video.mp4"
      />
    </section>
  );
};

export default HeroVideo;
