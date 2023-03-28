import User from 'model/User';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import dbConnect from 'utils/dbConnect';

const secret = process.env.NEXTAUTH_JWT_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req, secret })
  if (!token) {
    res.status(401).json({ msg: "Unauthorized"})
    res.end()
  }

  await dbConnect();
  const email = token?.email;
  const user = await User.findOne({ email });

  return res.status(200).json(user);
}
  