import { useDispatch, useSelector } from "react-redux"
import { useLogOut } from "../hook/LogOut"

export default function Home() {
  const {ispending, error , logout}= useLogOut()
  const {user} = useSelector((store)=> store.user)
  return (
    <>
      <div className="container">
        <div className="flex">
          <nav className="navbar">
            <div className="navbar-logo">
              <h2>Home - {user.displayName}</h2>
            </div>
            <ul className="navbar-links">
              <li>
                {!ispending && <button onClick={logout}>LogOut</button>}
                {ispending && <button disabled >Loading...</button>}
              </li>
            </ul>
          </nav>
          <div className="wrapper">

            <div className="title">
              <h2>Users List</h2>
            </div>

            <div className="card">
              <div className="img">
              </div>
              <div className="content">
                <div>
                  <h3>User name</h3>
                  <p>Email</p>
                </div>

                <h4>online</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
