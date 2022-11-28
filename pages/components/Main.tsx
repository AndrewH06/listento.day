import { FC, Fragment } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { FaCheck } from "react-icons/fa";

import Modal from "./Modal";

const Main: FC = (albums) => {
  const [count, setCount] = useState<number>(0);
  const [listened, setListened] = useState<boolean>(false);

  const { data, status } = useQuery(["albums"], async () => {
    const response = await axios.get(`/api/albums`);

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
                <h4 className="font-extrabold text-3xl transition-all hover:text-gray-700">
                  {data[count].album}
                </h4>
              </Link>
            </div>
            <h4 className="text-xl">{data[count].artist}</h4>
          </div>
          <p className="text-xs">{data[count].description}</p>
          {listened ? (
            <div className="flex items-center gap-2 rounded-md mx-auto bg-green-600 px-4 py-2 text-sm font-medium text-white cursor-default">
              Listened
              <FaCheck />
            </div>
          ) : (
            <Modal data={data[count]} />
          )}
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
