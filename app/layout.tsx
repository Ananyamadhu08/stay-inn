import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';

export const metadata = {
  title: 'StayInn',
  description: 'An app to book short and long-term homestays and experiences',
};

const font = Nunito({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
