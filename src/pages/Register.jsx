import { Form, NavLink, useActionData } from "react-router-dom";
import { useRegister } from "../hook/useRegister";
import { useEffect, useState } from "react";
import { formError } from "../components/ErrorId";

export async function action({ request }) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    return data

}


export default function Register() {
 

    const data = useActionData()
    const { register } = useRegister()


    useEffect(() => {
        if (data?.name && data?.email && data?.password) {
        register(data.name, data.email,  data.password);
        
        }else{
           data ? formError(data) : false
        }
    }, [data])


    return (
        <>
            <div className="register">
                <Form method="post" className="form">
                    <p>
                        Welcome to<span>Register to continue</span>
                        <NavLink to={"/login"}>Login</NavLink>

                    </p>
                    <input type="text" placeholder="Enter Your name" name="name" />
                    <input type="email" placeholder="Enter Your Email" name="email" />
                    <input type="password" placeholder="Enter Your Password" name="password" />
                    <button className="oauthButton">
                        Continue
                    </button>
                </Form>
            </div>
        </>
    )
}
