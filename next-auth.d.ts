import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      apollox_key: string;
      apollox_secret: string;
      auth: string;
    };
  }
  
  interface User {
    name: string;
    password: string;
    email: string;
    apollox_key: string;
    apollox_secret: string;
    auth: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    name: string;
  }
}