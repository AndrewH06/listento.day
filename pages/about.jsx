import Link from "next/link";

const about = () => {
  return (
    <>
      <main className="flex flex-col gap-12 items-center max-w-[1080px] mx-8 md:mt-12 text-lg">
        <div className="flex flex-col text-center gap-2">
          <h3 className="font-bold text-2xl">The Music</h3>
          <p className="max-w-[500px]">
            All album data is pulled from the&nbsp;
            <Link
              href="https://www.rollingstone.com/music/music-lists/best-albums-of-all-time-1062063/"
              className="text-sky-500">
              Rolling Stones The 500 Greatest Albums of All Time (2020)
            </Link>
            &nbsp;list. Each ranking, title, and description is based on the
            information in this article.
          </p>
        </div>
        <div className="flex flex-col text-center gap-2">
          <h3 className="font-bold text-2xl">The Technical</h3>
          <p className="max-w-[500px]">
            The application is built on&nbsp;
            <Link href="https://nextjs.org" className="text-sky-500">
              NextJs 14
            </Link>
            . It is created using React JS and styled with&nbsp;
            <Link href="https://tailwindcss.com" className="text-sky-500">
              Tailwind Css
            </Link>
            . The site is hosted on&nbsp;
            <Link href="https://vercel.com/dashboard" className="text-sky-500">
              Vercel
            </Link>
            . Check out the&nbsp;
            <Link
              href="https://github.com/AndrewH06/listento.day"
              className="text-sky-500">
              GitHub
            </Link>
            !
          </p>
        </div>
        <div className="flex flex-col text-center gap-2">
          <h3 className="font-bold text-2xl">The Creation</h3>
          <p className="max-w-[500px]">
            I created this because I love exploring new music. Inspired by Fi, I
            wanted to share the experience of discovering a great album with
            others. The website updates to a new album for everyone to&nbsp;
            <Link href="/" className="text-sky-500">
              Listen to
            </Link>
            (every)
            <Link href="/" className="text-sky-500">
              .day
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
};

export default about;
