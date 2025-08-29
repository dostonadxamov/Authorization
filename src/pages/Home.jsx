
import { useLogOut } from "../hook/LogOut"

export default function Home() {
  const { logout, ispending, error } = useLogOut()
  return (
    <div>
      <h1>Home</h1>
      {!ispending && <button onClick={logout} className="oauthButton">LogOut</button>}
      {ispending &&  <button disabled className="oauthButton" >Loading...</button>}
    </div>
  )
}
