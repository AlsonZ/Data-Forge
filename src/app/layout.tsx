import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Data Forge",
  description: "The perfect data for your projects!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-color-mode="dark">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
