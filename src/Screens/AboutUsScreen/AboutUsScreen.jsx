
import "./AboutUsScreen.css"

import aboutImg from "../../assets/aboutImg.png"
import { Link } from "react-router-dom"
const AboutUsScreen = () => {
    return (
    <div className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[60dvh] p-2 lg:p-20 justify-center items-center  ">
        
        <div className="flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg p-5 gap-10 z-2 shadow-lg shadow-black aboutUS">
        <div className="flex flex-col justify-center items-center gap-2 w-full ">

            <img src={aboutImg} alt="" />
        </div>  
            <div className="flex justify-center items-start flex-col gap-4 w-full p-8 aboutText ">
                <h1 className="text-teal-900 font-bold underline text-[35px]">AboutUs</h1>
                <div className=" justify-center items-center gap-4 text-md lg:text-xl font-semibold text-gray-800 ">
                    
                    <p className="text-justify text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate deserunt architecto iure unde, sunt sed in tenetur. Sit voluptate dolorem sequi veniam vero a ex asperiores, porro facere deserunt suscipit accusantium iste commodi delectus eius ipsam corrupti qui dolores?</p>
                    <p className="text-justify text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt velit molestias atque recusandae molestiae enim deleniti ducimus quos minus.</p>
                    <Link to="/contactUs" className=" btn mt-6 px-4 text-white font-bold py-4 w-3/4 text-center bg-teal-900 rounded-lg text-[18px] focus:outline-none hover:bg-teal-800 cursor-pointer shadow-md hover:shadow-lg hover:shadow-black shadow-black border border-black hover:border-black"> Contact Us</Link>
                    
                </div>
                
                

            </div>
            
                
        </div>
    </div>
    )
}

export default AboutUsScreen