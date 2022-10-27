import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center mx-12 md:gap-2 md:flex-row md:justify-between">
      <Link href="/" className="flex items-baseline">
        <h1 className="text-6xl font-extrabold">Listen to</h1>
        <p className="text-sm font-extrabold">.day</p>
      </Link>
      <div className="flex w-[312px] mb-4 md:mb-0 justify-between items-center md:w-[108px] md:gap-8 md:justify-end">
        <Link href="/about" className="font-semibold hover:text-gray-600">
          About
        </Link>
        <Link href="https://github.com/AndrewH06/listento.day">
          <Image src="/github.svg" height="30" width="30" className="hover" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
