import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "./components/Main";
import { NextPage } from "next";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
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
};

export default Home;
