import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../routes/mainRoutes";
import { auth } from "../firebase/config";
import { createUserDocumentGithub } from "../firebase/createUserDocument";
import { useState, useContext } from "react";

export const useLogin = () => {
  const { dispatch } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const provider = new GithubAuthProvider();

  const login = async () => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error("Could not complete signup");
      }

      const user = res.user;
      await createUserDocumentGithub(user);
      dispatch({ type: "LOGIN", payload: user });
      console.log(user);
      setIsPending(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, error, isPending };
};
