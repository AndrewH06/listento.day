import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Main = () => {
  const [count, setCount] = useState(0);
  const { data, error } = useSWR("/api/data", fetcher);

  useEffect(() => {
    const now = new Date().getTime();
    const start = 1666854000000;
    const diff = now - start;
    setCount(Math.floor(diff / (1000 * 3600 * 24)));
  }, []);

  if (!data) {
    return (
      <div className="flex justify-center text-xl font-semibold md:mt-6">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 items-center md:mt-6">
      <div>
        <Link href={data[count].link} target="_blank">
          <Image
            src={data[count].image}
            width="350"
            height="350"
            alt={data[count].Album + ` cover`}
            className="rounded-lg w-[300px] md:w-[350px]"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-center max-w-[400px] mx-8">
        <div className="flex flex-col items-center">
          <div className="flex items-baseline gap-1">
            <p className="text-xs font-light">{data[count].Rank}</p>
            <Link href={data[count].link} target="_blank">
              <h4 className="font-extrabold text-3xl hover:text-gray-600">
                {data[count].Album}
              </h4>
            </Link>
          </div>
          <h4 className="text-xl">{data[count].Artist}</h4>
        </div>
        <p className="text-xs">{data[count].Description}</p>
      </div>
    </div>
  );
};

export default Main;
