import './css/style.css';

import { Inter, Architects_Daughter } from 'next/font/google';

import Header from '@/components/ui/header';
import Banner from '@/components/banner';

import CustomScroller from '@/components/CustomScroller';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: 'The Locker Room',
  description:
    "Step into the world of an athlete with MLB All-Star Aj Ramos on The Locker Room. Join Aj as he shares insightful interviews with athletes and gives insight into what it takes physically and mentally to attain and maintain success. Don't miss out - tune in now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter overflow-hidden bg-black tracking-tight text-gray-200 antialiased`}
      >
        {/* <Header /> */}
        {children}
        {/* <Banner /> */}
        <CustomScroller />
      </body>
    </html>
  );
}
