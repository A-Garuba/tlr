import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';
import { forwardRef } from 'react';

const Hero = forwardRef<HTMLElement, any>(function Hero(props, ref) {
  return (
    <section ref={ref} className="h-dvh snap-center">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="relative pb-10 pt-32 md:pb-16 md:pt-40">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Landing template for startups
            </h1>
            <p
              className="mb-8 text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn mb-4 w-full bg-primary-600 text-white hover:bg-primary-700 sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  Start free trial
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn w-full bg-gray-700 text-white hover:bg-gray-800 sm:ml-4 sm:w-auto"
                  href="#0"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
});

export default Hero;
