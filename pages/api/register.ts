import User from "model/User";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "utils/dbConnect";

interface ResponseData {
  error?: string;
  msg?: string;
}

const validateForm = async (name: string, email: string, password: string) => {
  if (name.length < 3) {
    return { error: "Name must have 3 or more characters" };
  }

  await dbConnect();
  const emailUser = await User.findOne({ email: email });

  if (emailUser) {
    return { error: "Email already registered" };
  }

  if (password.length < 8) {
    return { error: "Password must have 8 or more characters" };
  }

  return null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }

  const { name, email, password } = req.body;

  const errorMessage = await validateForm(name, email, password);
  if (errorMessage) {
    return res.status(400).json(errorMessage as ResponseData);
  }

  const newUser = new User({ name, email, password });

  newUser.save().then(() =>
      res.status(200).json({ msg: "Successfuly created new User: " + newUser })
    )
    .catch((err: string) =>
      res.status(400).json({ error: "Error on '/api/register': " + err })
    );
}
