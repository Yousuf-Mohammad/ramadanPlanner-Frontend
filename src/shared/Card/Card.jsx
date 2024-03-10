
const Card = (props) => {
  return (
    <div className="flex justify-center items-center gap-5 flex-col bg-white rounded-lg  lg:p-5 text-black m-2 lg:m-4 p-5 shadow-lg shadow-black border-2 border-black min-h-[250px] max-h-[350px]">
                    <img className="  rounded-full   cursor-pointer" src={props.img} alt="" width='200' height='200' />
                    <h1 className=" text-2xl lg:text-3xl text-center text-teal-900 font-semibold">{props.title} </h1>
                    <p className="text-[18px] text-center text-slate-700">{props.detail}</p>
                </div>
  )
}

export default Card