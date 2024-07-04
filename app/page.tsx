import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex h-dvh flex-col items-center p-8 max-w-xl mx-auto">
      <div className="absolute top-4 flex w-full justify-center font-mono text-gray-500">
        The Locker Room
      </div>
      <div className="flex justify-center w-1/2 mt-16">
        <Image
          src="/logo.png"
          alt="The Locker Room Logo"
          height={300}
          width={300}
          priority
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center">
          <span className="text-gray-400 block">
            Go beyond the field, the court, and the stadium.
          </span>
          <span className="text-gray-400 block mt-4">
            Delve into the personal journeys of elite performers.
          </span>
          <span className="text-gray-400 block mt-4">
            Uncover their struggles, triumphs, and the transformative moments
            that define them.
          </span>
          <span className="block mt-4">
            Welcome to <i>The Locker Room</i>.
          </span>
        </div>
      </div>
      <div className="mt-10">
        <button className="py-2 px-4 rounded-full bg-transparent border border-gray-500 transition-all duration-300 hover:bg-primary hover:text-black hover:scale-110 hover:bg-opacity-95">
          Enter
        </button>
      </div>
      <div className="absolute bottom-4 flex w-full justify-center font-mono text-gray-500">
        With AJ Ramos
      </div>
    </main>
  );
}
