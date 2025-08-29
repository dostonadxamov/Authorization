

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "../firebase/config";
import { login as loginAction } from "../app/Auth/AuthSlice"; 

export default function useLogin() {
  const dispatch = useDispatch();

  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    console.log(`Email: ${email}  Password: ${password}`);
    try {
      setIspending(true);
      const req = await signInWithEmailAndPassword(auth, email, password);

      if (!req.user) {
        toast.error("Login failed");
        return;
      }


      dispatch(loginAction(req.user));
      console.log("User:", req.user);

    } catch (error) {
      setError(error.message);
      console.log("Firebase error:", error.message);
      toast.error(error.message);

    } finally {
      setIspending(false);
    }
  };

  return { login, error, isPending };
}
