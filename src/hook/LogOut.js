import { signOut } from "firebase/auth";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logOut } from "../app/Auth/AuthSlice";
import { auth, db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
export function useLogOut() {
    const dispatch = useDispatch()
    const [ispending, setispending] = useState(false)
    const [error, seterror] = useState(null)
    const {user}= useSelector((store)=> store.user)
    const logout = async () => {
        try {
            const useRef = doc(db, "users", user.uid)
            await updateDoc(useRef, {
                online: false
            })
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