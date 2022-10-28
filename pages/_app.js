import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative flex flex-col bg-neutral-50 text-gray-800 min-h-screen items-center gap-8 pt-8 sm:pt-12">
      <Head>
        <title>Listen Today</title>
        <meta
          name="description"
          content="Every day a new album! Powered by NextJs, Vercel, Spotify API, and Tailwind CSS"
        />
        <meta property="og:image" content="/recordplayer.png" />
        <link rel="icon" href="/vinyl.png" />
      </Head>
      <div className="flex flex-col gap-6 md:gap-2 w-full min-h-screen max-w-[1080px] mx-8 sm:mx-24 md:mx-32">
        <header>
          <Header />
        </header>
        <Component {...pageProps} />
      </div>
      <footer className="relative bottom-0 w-full bg-white">
        <Footer />
      </footer>
      <Analytics />
    </div>
  );
}

export default MyApp;
