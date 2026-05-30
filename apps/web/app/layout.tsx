import type { Metadata, Viewport } from "next";
import { Share_Tech_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { CyberMotionShell } from "@/components/motion/cyber-motion-shell";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

const monoFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://corelms.local"),
  applicationName: "CoreLMS",
  title: {
    default: "CoreLMS | Secure Learning Command Center",
    template: "%s | CoreLMS"
  },
  description: "A luxury-tier, high-security learning management platform.",
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: false,
    follow: false
  }
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-cyber-void font-display text-platinum-100 antialiased">
        {/* Providers stay client-side so browser-only animation libraries never execute during SSR. */}
        <AppProviders>
          <CyberMotionShell>{children}</CyberMotionShell>
        </AppProviders>
      </body>
    </html>
  );
}
