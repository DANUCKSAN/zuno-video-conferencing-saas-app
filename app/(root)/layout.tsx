import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Zuno",
  description: "Video conference App",
  icons: {
    icon: "/icons/logo2.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout;
