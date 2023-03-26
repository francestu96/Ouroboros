import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../src/utils/mongodb";
import dbConnect from "../../../src/utils/dbConnect";
import User from "../../../src/model/User";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
     }),
     GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    CredentialsProvider({
      id: "auth",
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "text",
        },
      },        
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({
          email: credentials?.email,
        });

        if (!user) {
          throw new Error("Email is not registered");
        }

        if (!user.comparePassword(credentials!.password)) {
          throw new Error("Password is incorrect");
        }

        return user;
      },
    }),
    CredentialsProvider({
      id: 'update-user',
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        name: {
          label: "name",
          type: "text",
        },
      },
      authorize(credentials): any  {
        return {
          email: credentials?.email,
          name: credentials?.name,
        };
      },
    })
  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
    
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.name = token.name;
        session.user.email = token.email || "";
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});
