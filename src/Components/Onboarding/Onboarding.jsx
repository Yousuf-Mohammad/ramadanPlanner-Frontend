import salah from "../../assets/salat.png"
import quran from "../../assets/quran.png"
import tracker from "../../assets/Tracker.png"
import zikr from "../../assets/zikr.jpg"
import Card from "../../shared/Card/Card"
import"./OnBoarding.css"

import { Link } from "react-router-dom"

const Onboarding = () => {
        return (
        <div className="w-full background flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[80dvh] px-7 py-4 lg:px-16 lg:py-12">
        
        <div className="flex justify-center items-start flex-col gap-8 lg:w-1/2 ">
                <div className="onBoardText shadow-lg shadow-black p-5">
                <h1 className ="text-white font-bold text-4xl mb-4 lg:text-6xl">We are with you in your purification Journey</h1>
                <p className="text-white  text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti rerum voluptatem magnam nemo eos saepe illo delectus officia sint omnis et doloremque ab consectetur aut, molestias tempora adipisci reprehenderit numquam dignissimos, nisi autem, magni cum. Dicta quisquam repudiandae saepe.</p>
                <Link to="/trackerContainer/salah"><button className="btn btn-wide mt-8 bg-teal-900 text-white border-black shadow-md shadow-black hover:bg-teal-700 ">Get Started</button></Link>
                </div>
        </div>
        <div className="flex justify-between items-center w-full lg:w-1/2 flex-wrap">

        <div className="w-full lg:w-1/2 ">
                <Card 
                img={salah} 
                title="Track Your Salah" 
                detail="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"/>
        </div>
        <div className="w-full lg:w-1/2 ">
                <Card 
                img={quran} 
                title="Connect With Quran" 
                detail="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"/>
        </div>
        <div className="w-full lg:w-1/2 ">
                <Card 
                img={tracker} 
                title="Build Habits" 
                detail="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"/>
        </div>
        <div className="w-full lg:w-1/2 ">
                <Card 
                img={zikr} 
                title="Dua and Adhkar" 
                detail="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"/>
        </div>
            
            

        </div>
        
    </div>
    )
}

export default Onboarding