import axios from "axios";
import { useState } from "react";

const AccountDeletion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
        
        axios
        .post(
          "https://ramadan-planner-backend.vercel.app/api/auth/delete-account",
          {
            email,
            password,
          }
        )
        .then((res) => {
          console.log(res.data);
        });
      
      
    
  };

  return (
    <>
    

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-500">
          Delete account
          </h2>
          <p className="text-center texl-lg text-gray-500">Please enter your email to confirm account deletion:</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST"  onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Delete
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            
          
          </p>
        </div>
      </div>
    
    {/* <form onSubmit={handleSubmit} className="flex flex-col place-items-center mt-20">

      <div className="m-2 ">
      <label className="text-xl " htmlFor="email">Email Address :</label>
      <input
        className="border-2 border-spacing-2 mx-4 px-6 py-1 border-black w-70dvw "
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Your email"
      />
      </div>
      <div className="m-2">
      <label className="text-xl" htmlFor="password">Password :</label>
      <input
        className="border-2 border-spacing-2 mx-4 px-6 py-1 border-black"
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div className="m-2">
      <label className="text-xl" htmlFor="confirmPassword">Confirm Password :</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        className="border-2 border-spacing-2 mx-4 px-8 py-1 border-black"
      />
      </div>

      <button className=" text-center btn bg-red-600 text-white shadow-md shadow-black hover:bg-red-800 border-black w-1/5" type="submit">Delete Account</button>
    </form> */}
    </>
  );
};

export default AccountDeletion;
