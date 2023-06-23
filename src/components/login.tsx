import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <>
            <div className=" bg-gray-500">
                <div className="flex flex-col items-center justify-center gap-4 h-screen  ">
                    <div className=" bg-gray-300 rounded-lg shadow py-8  ">
                        <div className="p-6">
                            <form className="">
                                <div>
                                    <h1 className="flex items-center justify-center text-2xl text-gray-600 font-bold">Log In</h1>
                                    <label className=" text-sm font-medium text-gray">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="bg-white  border-gray-300 text-black sm:text-sm rounded-lg   w-full p-2 "
                                    />
                                </div>
                                <div>
                                    <label className=" text-sm font-medium text-gray ">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name-="password"
                                        id="password"
                                        className="bg-white border-gray-300 text-black sm:text-sm rounded-lg w-full p-2"
                                    />
                                </div>
                                <div>
                                    <button
                                        className="bg-blue-700 rounded-lg font-medium mt-5 w-full p-2 text-white"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>

                            <div className="flex gap-3">
                                <p className="font-medium mt-5 ">
                                    Didn't have an account?
                                    <Link to="/signup" >
                                        <button className="font-medium text-blue-500 hover:underline m-2">Sign up</button>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Login;