import { getCurrentSession } from "@/actions/auth";
import Header from "@/components/layout/Header";
import { SanityLive } from "@/sanity/lib/live";
import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Luxury Bags & Elegant Jewelry",
  description:
    "Discover premium collections that define style, quality, and class — esigned to complement every occasion.",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user } = await getCurrentSession();

  return (
    <html lang="en">
      <body className={`${jost.className} antialiased min-h-[200vh]`}>
        <Header user={user} />
        {children}
        <SanityLive />
      </body>
    </html>
  );
};

export default RootLayout;
