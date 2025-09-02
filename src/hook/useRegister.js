import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../app/Auth/AuthSlice";
import { db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export const useRegister = () => {
    const dispatch = useDispatch()
    const [isPending, setIspending] = useState()
    const [error, setError] = useState()
    const register = async (name, email,  password) => {
        // console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
        try {
            setIspending(true)
            const req = await createUserWithEmailAndPassword(auth, email, password);

            if (!req.user) {
                toast.error("Regestration failed")
            }
            await updateProfile(req.user, {
                displayName: name,
                photoURL:"https://api.dicebear.com/9.x/lorelei/svg?seed=" + name
            })


            await setDoc(doc(db, "users", req.user.uid), {
                displayName: req.user.displayName,
                photoUrl: req.user.photoURL,
                online: true,
                uid: req.user.uid,
            });


            dispatch(login(req.user))
            console.log(req.user);

        } catch (error) {
            setError(error.message)
            console.log(error.message);
            toast.error(error.message)

        } finally {
            setIspending(false)
        }

    }
    return { register, isPending, error }
}