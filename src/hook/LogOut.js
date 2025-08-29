import { signOut } from "firebase/auth";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logOut } from "../app/Auth/AuthSlice";
import { auth } from "../firebase/config";

export function useLogOut() {
    const dispatch = useDispatch()
    const [ispending, setispending] = useState(false)
    const [error, seterror] = useState(null)
    const logout = async () => {
        try {
            setispending(true)
             await  signOut(auth)
            dispatch(logOut())
        } catch (error) {
            seterror(error.message)
            console.log(error.message);
            toast.error(error.message)

        } finally {
            setispending(false)
        }
    }

    return { logout, error, ispending }
}