import Image from 'next/image';
import React from 'react';

const Intro = ({ onEnter }: any) => {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center p-4">
      <div className="absolute top-4 flex w-full justify-center font-mono text-gray-500">
        The Locker Room
      </div>
      <div className="flex w-1/2 justify-center">
        <Image
          src="/images/logo.png"
          alt="The Locker Room Logo"
          height={300}
          width={300}
          priority
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-center">
          <span className="block text-gray-400">
            Go beyond the field, the court, and the stadium.
          </span>
          <span className="mt-4 block text-gray-400">
            Delve into the personal journeys of elite performers.
          </span>
          <span className="mt-4 block text-gray-400">
            Uncover their struggles, triumphs, and the transformative moments
            that define them.
          </span>
          <span className="mt-4 block">
            Welcome to <i>The Locker Room</i>.
          </span>
        </div>
      </div>
      <div className="mt-10">
        <button
          className="rounded-full border border-gray-500 bg-transparent px-4 py-2 transition-all duration-300 hover:scale-110 hover:bg-primary hover:bg-opacity-95 hover:text-black"
          onClick={onEnter}
        >
          Enter
        </button>
      </div>
      <div className="absolute bottom-4 flex w-full justify-center font-mono text-gray-500">
        With AJ Ramos
      </div>
    </div>
  );
};

export default Intro;
