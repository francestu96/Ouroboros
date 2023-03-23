import User from "model/User";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import dbConnect from "utils/dbConnect";

const secret = process.env.NEXTAUTH_JWT_SECRET;
interface ResponseData {
  error?: string;
  msg?: string;
}

const validateKeys = (key: string): boolean => {
  return true;
};

const validateForm = async (name: string, apollox_key: string, apollox_secret: string) => {
  if (name.length < 3) {
    return { error: "Name must have 3 or more characters" };
  }
  if (!validateKeys(apollox_key)) {
    return { error: "ApolloX key is not valid" };
  }
  if (!validateKeys(apollox_secret)) {
    return { error: "ApolloX secret is not valid" };
  }

  return null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const token = await getToken({ req, secret })
  if (!token) {
    res.status(401).json({ msg: "Unauthorized"})
    res.end()
  }

  const email = token?.email;
  const { name, apollox_key, apollox_secret } = req.body;

  const errorMessage = await validateForm(name, apollox_key, apollox_secret);

  if (errorMessage) {
    return res.status(400).json(errorMessage as ResponseData);
  }

  await dbConnect();
  const user = await User.findOneAndUpdate({ email }, { name, email, apollox_key, apollox_secret});
  if (!user) {
    return res.status(400).json({ error: "Telegram ID not found" } as ResponseData);
  }

  return res.status(200).json({ msg: "Successfuly update user " })
}
