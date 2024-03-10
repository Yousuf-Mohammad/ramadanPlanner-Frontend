
import data from "../../data/salah"
const SalahTrack = () => {
    

    return (
    <div>
        {
            data.map((salah,index)=>(
                <div key={index}>
                    <p>{salah.name}</p>
                    {
                        salah.anyFard?<label className="cursor-pointer label">
                        <input type="checkbox" checked={salah.fard} onChange={()=>console.log('changed')} className="checkbox checkbox-success"  />
                        <span className={`label-text ${salah.fard?" text-green-400":'text-gray-900'}`} >Fard</span>
                        
                        
                        </label>:null
                    }
                {
                        salah.anySunnah?<label className="cursor-pointer label">
                        <input type="checkbox" checked={salah.sunnah} onChange={()=>console.log('changed')} className="checkbox checkbox-success"  />
                        <span className={`label-text ${salah.sunnah?" text-green-400":'text-gray-900'}`} >Sunnah</span>
                
                
                        </label>:null
                    }
                </div>
            ))
        }
    </div>
    )
}

export default SalahTrack