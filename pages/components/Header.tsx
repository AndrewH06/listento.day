import { FC, Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { HiOutlineLogout } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";

interface AccountProps {
  user:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined;
}

const Header: FC = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col-reverse justify-center items-center mx-12 md:gap-2 md:flex-row md:justify-between">
      <Link href="/" className="flex items-baseline">
        <h1 className="text-6xl font-extrabold">Listen to</h1>
        <p className="text-sm font-extrabold">.day</p>
      </Link>
      <div className="flex mb-4 float-right md:mb-0 justify-between items-center md:gap-8 md:justify-end">
        <Link
          href="/dashboard"
          className="text-lg font-semibold text-gray-600 transition-all hover:text-gray-500">
          My Listens
        </Link>
        {session ? <Account user={session.user} /> : <LoginButton />}
      </div>
    </div>
  );
};

const Account: FC<AccountProps> = (props): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <Image
              alt=""
              src={props.user?.image!}
              height={40}
              width={40}
              className="rounded-full"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 px-4 py-2 mt-2 w-56 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <div className="py-2">
                  <p className="text-gray-500">{props.user?.name}</p>
                  <p className="text-gray-400 text-xs truncate text-ellipsis w-full">
                    {props.user?.email}
                  </p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="py-2 mt-1 flex justify-between text-gray-400 text-sm">
                  <p>Total listens:</p>
                  <p>{8}</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="text-red-400 py-1 flex gap-2 transition-all hover:bg-gray-100 hover:cursor-pointer w-full rounded-md items-center justify-center">
                  Logout <HiOutlineLogout className="text-xl" />
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const LoginButton: FC = (): JSX.Element => {
  return (
    <button
      onClick={() => {
        signIn("google");
      }}
      className="px-4 py-1 border-2 border-gray-500 rounded-xl text-gray-600 hover:bg-gray-100">
      Sign in
    </button>
  );
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};

export default Header;
