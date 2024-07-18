'use client';

import { useState } from 'react';
import Intro from './temp/components/Intro';

export default function Home() {
  const [isEntered, setIsEntered] = useState(false);
  const handleEnter = () => setIsEntered(true);

  return (
    <>
      <main className="mx-auto flex min-h-dvh items-center">
        {!isEntered ? (
          <Intro onEnter={handleEnter} />
        ) : (
          <div className="bg-gray-900 text-white">
            <div className="flex h-dvh items-center bg-black">
              <video
                className="w-full object-cover"
                autoPlay
                loop
                muted
                src="/hero-video.mp4"
              />
            </div>

            <section id="about" className="my-12">
              <h2 className="mb-4 text-3xl font-bold">About AJ Ramos</h2>
              <p>
                AJ Ramos made his MLB debut with the Miami Marlins in 2012,
                striking out the first three major batters he faced—an
                unprecedented feat in Marlins&apos; history. Rising to
                prominence, he led NL rookies in innings pitched, broke club
                records, and became an All-Star in 2016. After a series of
                injuries led to early retirement, AJ grappled with his identity
                beyond baseball.
              </p>
              <p>
                The Locker Room is AJ&apos;s new adventure, a journey to
                discover who he is outside of the game while connecting with
                other remarkable individuals to explore what drives them and how
                they find balance in their lives.
              </p>
            </section>

            <section id="why" className="my-12">
              <h2 className="mb-4 text-3xl font-bold">Why The Locker Room?</h2>
              <p>
                In AJ&apos;s words, &quot;I&apos;ve spent my life devoted to
                baseball, and now, I&apos;m on a mission to figure out who I am
                beyond the sport. Through conversations with amazing people
                excelling in their crafts, I hope to uncover not just their
                professional insights, but their personal stories and the
                lessons they&apos;ve learned along the way. This podcast is
                about finding contentment while staying driven, understanding
                balance, and navigating life&apos;s ups and downs.&quot;
              </p>
            </section>

            <section id="episodes" className="my-12">
              <h2 className="mb-4 text-3xl font-bold">Episodes</h2>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">
                  Episode 001: AJ Ramos
                </h3>
                <p>
                  In our inaugural episode, AJ shares his own story—from career
                  highs to the lows that led to his retirement. He talks about
                  his journey of self-discovery, the challenges of finding a new
                  identity, and his goals for The Locker Room. Get an intimate
                  look into AJ&apos;s world and his hopes for the podcast.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">
                  Episode 002: Monica Puig
                </h3>
                <p>
                  Join AJ as he chats with Olympic gold medalist Monica Puig.
                  They discuss the parallels in their careers, including the
                  highs of their peak performances in 2016 and the subsequent
                  struggles with injuries. Monica shares her transition from
                  tennis to marathon running, her insights on equality in
                  sports, and the importance of enjoying the process over being
                  solely result-oriented.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">
                  Episode 003: Ernest Jones
                </h3>
                <p>
                  Super Bowl champion Ernest Jones joins AJ to discuss his rapid
                  rise in the NFL, the challenges of growing up with a single
                  mother in Waycross, Georgia, and his journey from being a
                  third-round draft pick to becoming a defensive leader.
                  Ernest&apos;s story is one of perseverance, visualization, and
                  the relentless pursuit of excellence.
                </p>
              </div>
            </section>

            <section id="get-involved" className="my-12">
              <h2 className="mb-4 text-3xl font-bold">Get Involved</h2>
              <p>
                The Locker Room isn&apos;t just about listening—it&apos;s about
                engaging. Follow AJ&apos;s journey, share your thoughts, and
                connect with a community of listeners who are also on their
                paths to self-discovery and balance. Whether you&apos;re an
                athlete, a fan, or someone searching for inspiration, The Locker
                Room offers valuable insights and stories that resonate with
                all.
              </p>
            </section>

            <section id="subscribe" className="my-12">
              <h2 className="mb-4 text-3xl font-bold">Subscribe Today</h2>
              <p>
                Don&apos;t miss an episode! Subscribe to The Locker Room on your
                favorite podcast platform and join AJ Ramos and his incredible
                guests as they share the stories behind the spotlight.
              </p>
            </section>
            <footer className="bg-gray-800 p-6 text-white">
              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <p>
                Have questions, comments, or guest suggestions? Reach out to us
                at{' '}
                <a
                  href="mailto:contact@lockerroompodcast.com"
                  className="underline"
                >
                  contact@lockerroompodcast.com
                </a>
                . Follow us on social media for the latest updates and exclusive
                content.
              </p>
              <div className="mt-4">
                <a
                  href="https://instagram.com/ajramos"
                  className="mr-4 text-blue-400"
                >
                  Instagram: @ajramos
                </a>
                <a href="https://twitter.com/ajramos" className="text-blue-400">
                  Twitter: @ajramos
                </a>
              </div>
            </footer>
          </div>
        )}
      </main>
    </>
  );
}
