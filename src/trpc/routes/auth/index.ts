import { trpc } from "../../trpc.js";
import { signIn } from "./sign-in.js";
import { signOut } from "./sign-out.js";

export const authRoutes = trpc.router({
  signIn,
  signOut,
});
