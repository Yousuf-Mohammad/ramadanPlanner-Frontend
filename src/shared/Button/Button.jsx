const Button = (props) => {
    const{type,title}=props;
    return (
        
    <button
                type={type}
                
                className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm shadow-black border-black border-2  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
                {title}
    </button>
    )
}

export default Button