import "../styles/globals.css";
import Head from "next/head";
import Footer from "./components/Footer";
import Header from "./components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative flex flex-col bg-neutral-50 text-gray-800 min-h-screen items-center gap-8 pt-8 sm:pt-12">
      <Head>
        <title>Listen To</title>
        <meta
          name="description"
          content="Every day a new album! Powered by NextJs, Vercel, Spotify API, and Tailwind CSS"
        />
        <link rel="icon" href="/vinyl.png" />
      </Head>
      <div className="flex flex-col gap-8 w-full min-h-screen max-w-[1080px] mx-8 sm:mx-24 md:mx-32">
        <header>
          <Header />
        </header>
        <Component {...pageProps} />
      </div>
      <footer className="relative bottom-0 w-full bg-white">
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
