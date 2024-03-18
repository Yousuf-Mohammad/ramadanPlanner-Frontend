import { Link, Outlet } from "react-router-dom"


const TRackerContainer = () => {
    return (
        <div className="w-full ">
            <div className="hero min-h-[60dvh]" style={{backgroundImage: 'url(https://i.pinimg.com/564x/c9/04/f6/c904f605fccaa7c88e5520e468eae4d8.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Lorem Ipsum</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <div className="join">
        <Link to='/trackerContainer/salah'><button className="btn join-item border border-black">Track Salah</button></Link>
        <Link to='/trackerContainer/task'><button className="btn join-item border border-black">Task List</button></Link>
        <Link to='/trackerContainer/quran'><button className="btn join-item border border-black">Track Quran</button></Link>
            
        </div>
    </div>
  </div>
            </div>
        {/* <div className="flex justify-center items-center w-full  flex-col lg:flex-row rounded-lg px-8 py-12 gap-10">
        
        <div className="join">
            <button className="btn join-item border border-black"><Link to='/trackerContainer/salah'>Track Salah</Link></button>
            <button className="btn join-item border border-black"><Link to='/trackerContainer/task'>Task List</Link></button>
            <button className="btn join-item border border-black">Button</button>
        </div>
        
        
        </div> */}
            <div className=" lg:mt-[-250px] mt-5 "> <Outlet/> </div>
            
        </div>
    )
}

export default TRackerContainer