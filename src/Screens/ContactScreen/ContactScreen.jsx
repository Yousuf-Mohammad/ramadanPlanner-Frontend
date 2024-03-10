
import { FaFacebook, FaEnvelopeOpen ,FaWhatsapp , FaLocationArrow, FaPhone} from "react-icons/fa";

import "./ContactScreen.css"
const ContactScreen = () => {
    return (
    <div className="w-full bg-slate-200 flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[60dvh] p-4 lg:p-20 justify-center items-center ">
        
        <div className="flex justify-center items-center w-full lg:w-3/4 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-1 shadow-lg shadow-black">

            <div className="flex justify-center items-start flex-col gap-4 w-full p-5">
                <h1 className="text-teal-900 font-bold text-[35px]">Contact Info</h1>
                <div className="flex justify-center items-center gap-4 text-md lg:text-xl font-semibold text-gray-600">
                    <span className="bg-green-400 p-3 rounded-full">
                        <FaEnvelopeOpen/>
                    </span>Techtechies.bd@gmail.com
                </div>
                <div className="flex justify-center items-center gap-4 text-md lg:text-xl font-semibold text-gray-600">
                    <span className="bg-green-400 p-3 rounded-full">
                        <FaLocationArrow/>
                    </span>
                    Mohammadpur, Dhaka-1207. Bangladesh 
                </div>
                <div className="flex justify-center items-center gap-4 text-md lg:text-xl font-semibold text-gray-600">
                    <span className="bg-green-400 p-3 rounded-full">
                        <FaPhone/>
                    </span>
                    +8801521331371
                </div>
                <div className="flex justify-center items-center gap-4 mt-5">
                <span className="bg-white cursor-pointer  hover:bg-blue-300 hover:rounded-full ">
                <FaFacebook className="text-4xl text-blue-500" />
                </span>
                <span className="bg-white cursor-pointer   ">
                <FaEnvelopeOpen className="text-4xl text-gray-500 " />
                </span>
                <span className="bg-white cursor-pointer   ">
                <FaWhatsapp className="text-4xl text-green-500 " />
                </span>
                
                </div>

            </div>
                <div className="flex flex-col justify-center items-center gap-2 w-full">

                    <input type="text" name="name" id="name" placeholder="User Name" value="UserName" className="px-4 py-4 w-full border-2 border-teal-800 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-teal-900" />

                    <input type="email" name="email" id="email" placeholder="user Email" value="UserEmail" className="px-4 py-4 w-full border-2 border-teal-800 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-teal-900" />


                    <textarea className="px-4 py-4 w-full border-2 border-teal-800 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-teal-900" name="message" cols='30' rows='5' placeholder="Enter Your Message"/>


                    <input type="submit" name="submit" value='Submit' className="px-4 text-white font-bold py-4 w-full border-2 bg-teal-900 rounded-lg text-[18px] focus:outline-none hover:bg-teal-800 cursor-pointer"/>

                </div>
        </div>
    </div>
    )
}

export default ContactScreen