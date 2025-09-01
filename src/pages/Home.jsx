
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="flex">
          <nav className="navbar">
            <div className="navbar-logo">
              <h2>Home</h2>
            </div>
            <ul className="navbar-links">
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Users</p>
              </li>
              <li>
                <p>About</p>
              </li>
              <li>
                <p>Contact</p>
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
