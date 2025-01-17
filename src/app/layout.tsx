import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import ResponseNav from '@/components/Navigation/ResponseNav';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: '漢堡 | 健康食品',
  description: '這是美味的漢堡',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-hants">
      <body className={poppins.className}>
        <ResponseNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
