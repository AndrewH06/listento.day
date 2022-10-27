import Head from "next/head";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Listen Today" />
        <meta property="og:description" content="Listen to this album today!" />
      </Head>
      <main>
        <Main />
      </main>
    </>
  );
}
