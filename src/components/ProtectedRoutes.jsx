import { Navigate } from "react-router-dom"


export default function ProtectedRoutes({Children, user}) {
    if (user) {
        return Children
    } else {
        return <Navigate to="/login" />
    }
}
