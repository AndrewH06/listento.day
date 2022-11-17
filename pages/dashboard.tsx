import { NextPage } from "next";
import { getSession, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

const about: NextPage = () => {
  return (
    <>
      <Head>
        <Head>
          <meta property="og:title" content="About - Listen Today" />
          <meta property="og:description" content="About the website" />
        </Head>
      </Head>
      <main className="flex flex-col gap-12 items-center max-w-[1080px] mx-8 md:mt-12 text-lg">
        <div>Dashboard</div>
      </main>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default about;
