import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://flourishwell.com'),
  title: {
    default: 'Flourish Well - Professional Counselling & Mental Health Services',
    template: '%s | Flourish Well'
  },
  description: 'Professional counselling and wellbeing services by Dr. Binu Thomas. Over 20 years of experience offering individual therapy, family counselling, workplace wellbeing, and mental health support across India and internationally.',
  keywords: [
    'counselling psychologist',
    'mental health services',
    'therapy',
    'wellbeing',
    'family counselling',
    'workplace wellbeing',
    'Dr. Binu Thomas',
    'individual therapy',
    'parent coaching',
    'school consultancy',
    'online counselling'
  ],
  authors: [{ name: 'Dr. Binu Thomas' }],
  creator: 'Dr. Binu Thomas',
  publisher: 'Flourish Well',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://flourishwell.com',
    title: 'Flourish Well - Professional Counselling & Mental Health Services',
    description: 'When the mind thrives, life flourishes. Professional mental health support by Dr. Binu Thomas with 20+ years of experience.',
    siteName: 'Flourish Well',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flourish Well - Professional Counselling & Mental Health Services',
    description: 'When the mind thrives, life flourishes. Professional mental health support by Dr. Binu Thomas.',
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
