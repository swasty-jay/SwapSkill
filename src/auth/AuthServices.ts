import { auth, db } from "@/firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  type AuthError,
  type User,
} from "firebase/auth";
import { setDoc, serverTimestamp, doc } from "firebase/firestore";

/**
 * Sign up a new user with email and password
 * Also creates a user document in Firestore
 */

export interface SignUpData {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  user?: User;
  error?: string;
}

export const signUpWithEmail = async (
  userData: SignUpData
): Promise<AuthResult> => {
  try {
    // Create user account
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );

    const user = userCredential.user;

    // Update the user's display name
    await updateProfile(user, {
      displayName: userData.fullName,
    });

    // Create user document in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      fullName: userData.fullName,
      email: userData.email,
      createdAt: serverTimestamp(),
      lastLoginAt: serverTimestamp(),
    });

    return {
      success: true,
      user: user,
    };
  } catch (error) {
    const authError = error as AuthError;
    let errorMessage = "An error occurred during sign up";

    // Handle specific Firebase Auth errors
    switch (authError.code) {
      case "auth/email-already-in-use":
        errorMessage = "An account with this email already exists";
        break;
      case "auth/weak-password":
        errorMessage = "Password is too weak";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email address";
        break;
      case "auth/operation-not-allowed":
        errorMessage = "Email/password accounts are not enabled";
        break;
      default:
        errorMessage = authError.message;
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
};

///////////////////////////////////////

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};
//////////////////////////////////////
/////////////////////////////////////

/**
 * Sign in an existing user with email and password
 */
export const signInWithEmail = async (
  loginData: LoginData
): Promise<AuthResult> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginData.email,
      loginData.password
    );

    const user = userCredential.user;

    // Update last login time in Firestore
    await setDoc(
      doc(db, "users", user.uid),
      {
        lastLoginAt: serverTimestamp(),
      },
      { merge: true }
    );

    return {
      success: true,
      user: user,
    };
  } catch (error) {
    const authError = error as AuthError;
    let errorMessage = "An error occurred during sign in";

    // Handle specific Firebase Auth errors
    switch (authError.code) {
      case "auth/user-not-found":
        errorMessage = "No account found with this email";
        break;
      case "auth/wrong-password":
        errorMessage = "Incorrect password";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email address";
        break;
      case "auth/user-disabled":
        errorMessage = "This account has been disabled";
        break;
      case "auth/too-many-requests":
        errorMessage = "Too many failed attempts. Please try again later";
        break;
      default:
        errorMessage = authError.message;
    }

    return {
      success: false,
      error: errorMessage,
    };
  }
};
