import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer, Header, ThemeProvider } from "@/components";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover the best hotel rooms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <Header />
          <main className="font-normal">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
