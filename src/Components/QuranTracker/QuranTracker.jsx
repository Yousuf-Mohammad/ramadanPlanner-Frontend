import HijriToday from "../hijriDate/HijriToday"


const QuranTracker = () => {
    return (
    <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[60dvh] p-4 lg:p-20 justify-center items-center ">
        
        <div className="flex justify-center items-center w-full lg:w-1/2 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-1 shadow-lg shadow-black">

            <div className="flex justify-center items-center flex-col gap-4 w-full p-5 ">
            <h1 className="text-[35px] font-bold underline ">Connect With Quran </h1>
            
            </div>
            <div className="flex justify-center items-center flex-col gap-4 w-full p-5 border-l-4 border-black ">
                <div className="border-b-2 border-black ">
                    <HijriToday/>
                </div>
                <div className="text-center">
                    <h1 className="text-xl font-semibold ">Today&apos;s Special Task:</h1>
                    <h1 className="text-2xl font-semibold border p-4 border-black mt-4 text-teal-700 rounded-md ">Memorize 1st 4 ayat of Surah Mulk</h1>
                </div>

            </div>
        </div>
        
        </div>
    )
}

export default QuranTracker