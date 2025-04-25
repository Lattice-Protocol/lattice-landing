import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { type NextPage } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const RootLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
