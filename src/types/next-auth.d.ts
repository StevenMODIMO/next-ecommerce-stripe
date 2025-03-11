import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      image?: string; // Ensure TypeScript knows image can be present
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    avatar?: string; // Add avatar property
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    image?: string; // Ensure consistency in JWT
  }
}
