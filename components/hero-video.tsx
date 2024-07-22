import React, { MouseEvent } from 'react';

const HeroVideo = ({ onSkipPress = () => {} }: any) => {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    onSkipPress();
  };

  return (
    <section className="relative h-dvh snap-center bg-black">
      <div className="flex h-dvh items-center justify-center">
        <video
          className="h-2/5 w-full object-cover sm:h-5/6 sm:object-contain"
          autoPlay
          loop
          muted
          src="/videos/hero-video.mp4"
        />
      </div>
      <div className="absolute bottom-2 flex w-full justify-center">
        <button
          className="btn-sm bg-primary-900 bg-opacity-25 hover:bg-primary hover:text-gray-800"
          onClick={handleClick}
        >
          Skip
        </button>
      </div>
    </section>
  );
};

export default HeroVideo;
