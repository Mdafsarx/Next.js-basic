import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata = {
  title: {      // dynamic meta data setup 
    default: "NEXT HERO",
    template: "%s | NEXT HERO"
  },
  description: "Next powerful website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} `}>
        <Header />
        <div className="p-10 min-h-[59.8vh]">
          {children}    {/* outlet */}
        </div>
        <Footer />
      </body>
    </html>
  );
}
