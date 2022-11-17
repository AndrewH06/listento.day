import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="relative py-4 flex flex-col items-center text-neutral-500">
      <p>Made for Fi</p>
      <p className="text-xs">to listen to more albums</p>
      <Link
        href="/about"
        className="mt-2 font-semibold hover:text-gray-600 hover:underline">
        More about the website
      </Link>
    </div>
  );
};

export default Footer;
