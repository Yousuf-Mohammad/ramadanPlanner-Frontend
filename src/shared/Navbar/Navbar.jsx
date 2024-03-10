
import { Link } from "react-router-dom"
import logo from "../../assets/lohoWhite.png"
const Navbar = () => {
  return (
  <div className=" bg-[#061E20] "> 
  <div className="navbar border-2 py-8 border-[#061E20] text-white">
  <div className="navbar-start">
    <div className="dropdown text-black">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  text-white" fill="none" viewBox="0 0 12 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-base-100 rounded-box w-52">
        
        <li><Link to='/aboutUs'>About</Link></li>
        <li><Link to='/contactUs'>Contact</Link></li>
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
    <Link to='/' className="btn btn-ghost"><img src={logo} alt="" className="h-14 w-28 lg:h-20 lg:w-40 lg:ml-20 lg:mt-[-20px]" /></Link>
  </div>
  <div className="navbar-end hidden lg:flex ">
    <ul className="menu menu-horizontal pr-12 text-lg">
        <li><Link to='/aboutUs'>About</Link></li>
        <li><Link to='/contactUs'>Contact</Link></li>
    
      <li>
        <details>
          <summary>User Name</summary>
          <ul className="p-4 text-black">
            <li><a>Edit Account</a></li>
            <li><Link to='/delete-account'>Delete Account</Link></li>
            <li><a className="btn">Log Out</a></li>
          </ul>
        </details>
      </li>
     
    </ul>
  </div>
  </div>
  </div> 
  )
}

export default Navbar