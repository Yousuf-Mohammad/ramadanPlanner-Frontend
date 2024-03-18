
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/lohoWhite.png"
import { useDispatch, useSelector } from "react-redux"
import { resetToken } from "../../redux/features/authentication/authToken"
const Navbar = () => {
  const dispatch = useDispatch()
  const {userInfo} =useSelector((state)=>state.authToken)
  const navigate = useNavigate()
  
  const handleDelete = (e) => {
    e.preventDefault();
    try {
        console.log("clicked");
        dispatch(resetToken());
        navigate("/")
    } catch (error) {
        alert(error?.data?.message || error.message)
    }
    };

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
            <li><button onClick={()=>handleDelete}>Log Out</button></li>
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
    
      {userInfo?(<li>
        <details>
          <summary>{userInfo.user.first_name}</summary>
          <ul className="p-4 text-black">
            {/* <li><a>Edit Account</a></li> */}
            <li><Link to='/delete-account'>Delete Account</Link></li>
            <li><button onClick={handleDelete}>Log Out</button></li>
          </ul>
        </details>
      </li>):<Link to ="/login" className="btn ml-4 bg-teal-800 text-white border-0 text-lg hover:text-black">Login</Link>}
     
    </ul>
  </div>
  </div>
  </div> 
  )
}

export default Navbar