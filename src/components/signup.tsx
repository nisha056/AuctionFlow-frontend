import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    let [username, setUsername] = useState();
    let [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleUsername = (event: any) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event: any) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();

        axios.post("http://localhost:8000/users/signup", {
            username: username,
            password: password,
        }).then((res) => {
            navigate("/login");
        }).catch((err) => {
            console.log(err);
        })

    }
    return (
        <>

            <div className=" bg-sky-100">
                <div className="flex flex-col items-center justify-center gap-4 h-screen  ">
                    <div className=" bg-sky-50 rounded-lg shadow-lg py-8  ">
                        <div className="p-6">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <h1 className="flex items-center justify-center text-2xl text-gray-600 font-bold">Sign Up</h1>
                                    <label className=" text-sm font-medium text-gray">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        onChange={handleUsername}
                                        className="text-black sm:text-sm rounded-lg focus:outline-none w-full p-2 shadow-lg "
                                        required />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray ">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={handlePassword}
                                        className="text-black sm:text-sm rounded-lg w-full p-2 focus:outline-none shadow-lg"
                                        required
                                    />
                                </div>
                                <div>
                                    <button type="submit"
                                        className="bg-blue-700 rounded-lg font-medium mt-5 w-full p-2 text-white"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>

                            <div className="flex gap-3">
                                <p className="font-medium mt-5 ">
                                    Already have an account?
                                    <Link to="/login">
                                        <button className="font-medium text-blue-500 hover:underline m-2">Login</button>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};
export default SignUp;