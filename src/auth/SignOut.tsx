import { auth } from "@/firebase/Firebase";
import type { Auth, AuthError } from "firebase/auth";
import type { AuthResult } from "./AuthServices";
import { signOut as firebaseSignOut } from "firebase/auth";

export const signOutUser = async (): Promise<AuthResult> => {
  try {
    await signOut(auth);
    return {
      success: true,
    };
  } catch (error) {
    const authError = error as AuthError;
    return {
      success: false,
      error: authError.message,
    };
  }
};

function signOut(auth: Auth) {
  return firebaseSignOut(auth);
}
