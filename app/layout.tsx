import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://restorationpath.com'),
  title: {
    default: 'Restoration Path - Professional Counselling & Mental Health Services',
    template: '%s | Restoration Path'
  },
  description: 'Professional counselling and wellbeing services. Over 20 years of experience offering individual therapy, family counselling, workplace wellbeing, and mental health support across India and internationally.',
  keywords: [
    'counselling psychologist',
    'mental health services',
    'therapy',
    'wellbeing',
    'family counselling',
    'workplace wellbeing',
    'individual therapy',
    'parent coaching',
    'school consultancy',
    'online counselling'
  ],
  authors: [{ name: 'Restoration Path' }],
  creator: 'Restoration Path',
  publisher: 'Restoration Path',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://restorationpath.com',
    title: 'Restoration Path - Professional Counselling & Mental Health Services',
    description: 'Guiding you toward healing and renewal. Professional mental health support with 20+ years of experience.',
    siteName: 'Restoration Path',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restoration Path - Professional Counselling & Mental Health Services',
    description: 'Guiding you toward healing and renewal. Professional mental health support.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when ready
    // google: 'your-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <noscript>
          <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#fee', color: '#900' }}>
            JavaScript is required for the best experience on this website.
          </div>
        </noscript>
      </body>
    </html>
  );
}
