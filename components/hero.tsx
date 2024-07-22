import { forwardRef } from 'react';

const Hero = forwardRef<HTMLElement, any>(function Hero(props, ref) {
  return (
    <section
      ref={ref}
      className="flex h-dvh w-full snap-center justify-center bg-opacity-25 bg-[url('/images/aj-studio-living-room.jpg')] bg-cover bg-center"
    >
      <div className="flex h-dvh w-full flex-col justify-center gap-10 bg-black bg-opacity-75 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* <div className="m-2 mb-4 inline-flex rounded-full bg-green-200 px-3 py-1 text-sm font-semibold text-green-600">
              Reach goals that matter
            </div> */}
          <h1 className="h2 mb-4">
            Discover the Real Stories Behind the Stars
          </h1>
          <p className="text-xl text-gray-400">
            Hosted by former MLB All-Star <strong>AJ Ramos</strong>,{' '}
            <em>The Locker Room</em> delves into the personal journeys of elite
            performers, uncovering their struggles, triumphs, and the
            transformative moments that define them.
          </p>
        </div>
        <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
          <div>
            <a
              className="btn mb-4 w-full bg-primary-600 text-white hover:bg-primary-700 sm:mb-0 sm:w-auto"
              href="#0"
            >
              Watch Now
            </a>
          </div>
          <div>
            <a
              className="btn w-full bg-gray-700 text-white hover:bg-gray-800 sm:ml-4 sm:w-auto"
              href="#0"
            >
              Get Featured
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
