import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/Toast";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"bg-white text-slate-900 antialiased"}>
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          {children}
          <Toaster position='bottom-right'/>

          {/* @ts-expect-error Server Components */}
          <Navbar />
        </Providers>

        {/* allow for more height on mobile devices*/}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
