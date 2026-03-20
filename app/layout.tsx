import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PDF Tools - Merge, Split & Compress PDFs Online',
  description: 'Free online PDF tools to merge, split, and compress PDFs. Works entirely in your browser with no file uploads.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}