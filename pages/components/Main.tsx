import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";
import { GetStaticProps } from "next";
import { prisma } from "../../lib/prisma";
import axios from "axios";

const Main: FC = (albums) => {
  const [count, setCount] = useState(0);

  const { data, status } = useQuery(["albums"], async () => {
    const response = await axios.get(`${"http://localhost:3000"}/api/albums`);

    return response.data;
  });

  useEffect(() => {
    const now = new Date().getTime();
    const start = 1666854000000;
    const diff = now - start;
    setCount(Math.floor(diff / (1000 * 3600 * 24)));
  }, []);

  if (status === "error")
    <div className="flex justify-center text-xl font-semibold md:mt-6">
      Something went wrong, try again later.
    </div>;

  if (status === "success")
    return (
      <div className="flex flex-col gap-2 items-center md:mt-6">
        <div>
          <Link href={data[count].link} target="_blank">
            <Image
              src={data[count].image}
              width="350"
              height="350"
              alt={data[count].album + ` cover`}
              className="rounded-lg w-[300px] md:w-[350px]"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-4 text-center max-w-[400px] mx-8">
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-1">
              <p className="text-xs font-light">{data[count].rank}</p>
              <Link href={data[count].link} target="_blank">
                <h4 className="font-extrabold text-3xl hover:text-gray-600">
                  {data[count].album}
                </h4>
              </Link>
            </div>
            <h4 className="text-xl">{data[count].artist}</h4>
          </div>
          <p className="text-xs">{data[count].description}</p>
        </div>
      </div>
    );
  return (
    <div className="flex justify-center text-xl font-semibold md:mt-6">
      Loading...
    </div>
  );
};

export default Main;
