
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Button from '../../shared/Button/Button';
import logo from "../../assets/logoGreen.png"
const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        { confirmPassword===password?console.log('submitted'):alert('passwords dont match ')

        }
        

        };


        
    return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
        

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form className="space-y-6 form p-8 border border-black rounded-xl shadow-lg shadow-black lg:mt-24" action="#" method="POST" onSubmit={handleSubmit}>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
            className="mx-auto h-20 w-auto"
            src={logo}
            alt="Your Company"
            />
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
            </h2>
        </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Your Name
                </label>
                <div className="mt-1">
                <input
                    id="name"
                    name="name"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-green-900 shadow-inner ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
                </label>
                <div className="mt-1">
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-green-900 shadow-inner ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                
                </div>
                <div className="mt-1">
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900  shadow-green-900 shadow-inner ring-1 ring-inset ring-gray-300 placeholder:text-gray-400focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                </label>
                
                </div>
                <div className="mt-1">
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  shadow-green-900 shadow-inner sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div className="bg-indigo-600 hover:bg-indigo-500">
                <Button type={"submit"} title={"Sign in"} />
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login
            </Link>
            </p>
            </form>

            
        </div>
        </div>
    </>
    )
}

export default RegisterScreen