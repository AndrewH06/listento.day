import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
