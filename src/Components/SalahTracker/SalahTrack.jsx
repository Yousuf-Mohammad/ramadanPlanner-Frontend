
import { useState } from "react"
import datas from "../../data/salah"
import HijriToday from "../hijriDate/HijriToday";
const SalahTrack = () => {

    const [data,setData]=useState(datas);
    const completedFard=(index)=>{
        data[index].completedFard=(!data[index].completedFard)
        console.log(data[index]);
        setData([...data])
    }
    const completedSunnah=(index)=>{
        data[index].completedSunnah=(!data[index].completedSunnah)
        console.log(data[index]);
        setData([...data])
    }

    return (
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[60dvh] p-4 lg:p-20 justify-center items-center ">
        
        <div className="flex justify-center items-center w-full lg:w-1/2 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 shadow-lg shadow-black">

            <div className="flex justify-center items-center flex-col gap-4 w-full p-5 ">
            <h1 className="text-[35px] font-bold underline ">Track Your Salah </h1>
            <table>
            
            <tbody className="p-4">
        {
            data.map((salah,index)=>(
                    
                    <tr key={index} className=" border-gray-400 border-b-2 border-spacing-4" >
                    <td className="text-md font-bold lg:text-2xl ">{salah.name} :</td>
                    {
                        salah.anyFard?
                        <td>
                        <label className="cursor-pointer label ">
                        <input type="checkbox" checked={salah.completedFard} onChange={()=>completedFard(index)} className="checkbox checkbox-success "  />
                        <span className={`label-text mx-2 text-gray-900`} > Faardh</span>
                        </label></td>:null
                    }
                    {
                        salah.anySunnah?
                        <td>
                        <label className="cursor-pointer label ">
                        <input type="checkbox" checked={salah.sunnah} onChange={()=>completedSunnah(index)} className="checkbox checkbox-success"  />
                        <span className={`label-text mx-2 ${salah.sunnah?" text-green-400":'text-gray-900'}`} > Sunnah</span>
                        </label></td>:null
                    }
                    </tr>

            ))
        }
            </tbody>
            </table>
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

export default SalahTrack