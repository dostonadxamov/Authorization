import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";


export const useRegister = () => {
    const [isPending, setIspending] = useState()
    const [error, setError] = useState()
    const  register = async (name, password, email) => {
        // console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
        try {
            setIspending(true)
            const req = await createUserWithEmailAndPassword(auth, email, password);

            if (!req.user) {
                toast.error("Regestration failed")
            }
        } catch (error) {
            setError(error.message)
            console.log(error.message);
            l
            
        } finally {
            setIspending(false)
        }

    }
    return { register }
}