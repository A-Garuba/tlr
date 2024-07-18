import React from 'react';

const HeroVideo = () => {
  return (
    <div className="flex h-dvh items-center bg-black">
      <video
        className="w-full object-cover"
        autoPlay
        loop
        muted
        src="/videos/hero-video.mp4"
      />
    </div>
  );
};

export default HeroVideo;
