import localFont from 'next/font/local'
import {Ubuntu} from 'next/font/google'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Mii Explorer Online",
  description: "Explore and discover the Wuhu Island with your friends",
};

const continuum = localFont({
  src:'./fonts/contb.ttf',
  variable:"--font-continuum"
})

const ubutuntu = Ubuntu({
  subsets:['latin'],
  weight:'700',
  variable:"--font-ubuntu"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubutuntu.variable} ${continuum.variable}`} style={{margin:0, cursor:'none'}}>
        {children}
      </body>
    </html>
  );
}
