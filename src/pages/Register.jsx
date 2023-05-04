import React, { useState } from "react";
import { useRegisterUserMutation } from "../features/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { data } from "autoprefixer";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordconfirmation] = useState("");
    const [error, setError] = useState({});
    const nav = useNavigate();

    const [registerUser] = useRegisterUserMutation();

    const handleSubmit = async e => {
        e.preventDefault();
        const user = { name, email, password, password_confirmation };
        const  data  = await registerUser(user);
        setError(data?.error?.data?.errors)
        if (data?.data?.success) nav("/login");
    };


    return (
        <div className=" w-full h-screen md:flex justify-center items-center">
            <div className=" w-full md:w-2/3 lg:w-1/3 p-10 shadow border border-gray-200 rounded-md">
                <div className=" text-center mb-5">
                    <p className=" text-2xl">Register</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            name="floating_name"
                            id="floating_name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Your Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            name="floating_email"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email address
                        </label>
                        {
                           error && <p className=" text-sm text-red-500 mt-2">{error?.email?.map(mail => mail)}</p>
                        }
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            name="floating_password"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            value={password_confirmation}
                            onChange={e =>
                                setPasswordconfirmation(e.target.value)
                            }
                            type="password"
                            name="repeat_password"
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Confirm password
                        </label>
                        {
                            error && <p  className=" text-sm text-red-500 mt-2">{error?.password?.map(pw => pw)}</p>
                        }
                    </div>
                    <div className=" flex flex-col gap-5 items-center">
                        <p>
                            Do you have an account?
                            <Link to='/login'>
                                <span className=" ms-1 text-lg text-blue-500">
                                    Login
                                </span>
                            </Link>
                        </p>
                        <button
                            type="submit"
                            className=" bg-blue-900 text-white rounded-sm hover:bg-blue-950 shadow-md px-10 py-2"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
