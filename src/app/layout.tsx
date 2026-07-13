import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBookingButton } from "@/components/sticky-booking-button";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Standard Barbershop",
  description:
    "Modern Bakersfield barbershop offering clean cuts, beard work, transparent pricing, and easy online booking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[var(--color-ink)] text-[var(--color-paper)] antialiased">
        <div className="relative flex min-h-full flex-col overflow-x-clip">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <StickyBookingButton />
        </div>
      </body>
    </html>
  );
}
