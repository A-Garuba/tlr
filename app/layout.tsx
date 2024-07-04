import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Locker Room',
  description:
    "Step into the world of an athlete with MLB All-Star Aj Ramos on The Locker Room. Join Aj as he shares insightful interviews with athletes and gives insight into what it takes physically and mentally to attain and maintain success. Don't miss out - tune in now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
