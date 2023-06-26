import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    var [username, setUsername] = useState();
    var [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleUsername = (e: any) => {
        setUsername(e.target.value);
    }
    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post("http://localhost:8000/users/login", {
            username: username,
            password: password,
        }).then((res) => {
            console.log(res);

            localStorage.setItem("username", JSON.stringify(res.data.data));
            navigate("/home");
        }).catch((err) => {
            console.log(err);
        })
    }


    return (
        <>
            <div className=" bg-gray-500">
                <div className="flex flex-col items-center justify-center gap-4 h-screen  ">
                    <div className=" bg-gray-300 rounded-lg shadow py-8  ">
                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="">
                                <div>
                                    <h1 className="flex items-center justify-center text-2xl text-gray-600 font-bold">Log In</h1>
                                    <label className=" text-sm font-medium text-gray">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        onChange={handleUsername}
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
                                        onChange={handlePassword}
                                        className="bg-white border-gray-300 text-black sm:text-sm rounded-lg w-full p-2"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
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