import { NextPage } from "next";
import { signIn, getSession } from "next-auth/react";

const login: NextPage = () => {
  return (
    <div>
      <button
        onClick={() => {
          signIn("google");
        }}>
        login
      </button>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default login;
