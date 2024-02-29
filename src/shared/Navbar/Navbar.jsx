
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
  <div className="navbar bg-base-100 border border-b-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>About</a></li>
        <li><a>Contact</a></li>
        <li><Link to='/privacy-policy'>privacy-policy</Link></li>
        <li>
          <a>User Name</a>
          <ul className="p-2">
            <li><a>Edit Account</a></li>
            <li><Link to='/delete-account'>Delete Account</Link></li>
            <li><a className="btn">Log Out</a></li>
          </ul>
        </li>
       
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
      <li><a>About</a></li>
      <li><a>Contact</a></li>
      <li><Link to='/privacy-policy'>privacy-policy</Link></li>
      <li>
        <details>
          <summary>User Name</summary>
          <ul className="p-2">
            <li><a>Edit Account</a></li>
            <li><Link to='/delete-account'>Delete Account</Link></li>
            <li><a className="btn">Log Out</a></li>
          </ul>
        </details>
      </li>
     
    </ul>
  </div>
  </div>
  )
}

export default Navbar