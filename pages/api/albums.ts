import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const albums = await prisma.album.findMany();
  return res.status(200).json(albums);
};

export default handler;
