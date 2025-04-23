// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import ClerkWrapper from '@/components/ClerkWrapper';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Schedulo',
  description: 'Meet Scheduling App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkWrapper>
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          <footer className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 text-gray-600 text-center">
              <p>© 2025 Schedulo. All rights reserved.</p>
            </div>
          </footer>
        </ClerkWrapper>
      </body>
    </html>
  );
}
