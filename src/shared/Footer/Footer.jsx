import { Link } from "react-router-dom"
import { FaFacebook, FaEnvelopeOpen ,FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/lohoWhite.png"

const Footer = () => {
  return (
    <div className="w-full bg-[#061E20] text-white flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 px-10 py-14 lg:px-20 lg:py-28">

      <div className="flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]">
       <img src={logo} alt="" />
        <p className="text-center font-bold  ">&copy; {new Date().getFullYear()} TechTechies BD </p>

        <p className="text-lg text-slate-200">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tempore sit omnis. Animi ipsum, ea quo vitae quis ad quod reprehenderit odio nisi dolore autem modi voluptatibus aspernatur, magni in.
          
        </p>
        <div className="flex justify-center items-center gap-4 mt-3">
          <span className="cursor-pointer ">
          <FaFacebook className="text-3xl"/>
          </span>
          <span className=" cursor-pointer   ">
          <FaWhatsapp className="text-3xl"/>
          </span>
          <span className=" cursor-pointer ">
          <FaEnvelopeOpen className="text-3xl"/>
          </span>
        </div>

      </div>

      <div className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[30%]">

        <ul className="flex flex-col justify-center items-start gap-3">
          <h1 className="text-2xl underline">Links</h1>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">Home</li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">About Us</li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300">Contact Us</li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300"><Link to='/privacy-policy'>Privacy & Policy</Link></li>
          <li className="text-slate-300 cursor-pointer hover:text-green-300"><Link to='/registration'>Registration</Link></li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-start lg:items-center w-full lg:w-[30%]">

        <h1 className="cursor-pointer font-bold underline">Download Our App from the Play Store</h1>
        <img className="m-6 border-2 border-black" src="../../assets/White Grey Simple Photo Sold Real Estate Facebook Post.jpg" alt="" width='200' height='200'/>
      </div>


    </div>
  )
}

export default Footer