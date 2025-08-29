import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../app/Auth/AuthSlice";


export const useRegister = () => {
    const dispatch = useDispatch()
    const [isPending, setIspending] = useState()
    const [error, setError] = useState()
    const register = async (name, email, password) => {
        // console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
        try {
            setIspending(true)
            const req = await createUserWithEmailAndPassword(auth, email, password);

            if (!req.user) {
                toast.error("Regestration failed")
            }
            await updateProfile(req.user, {
                displayName: name,
            })

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