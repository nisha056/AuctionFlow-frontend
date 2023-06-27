import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeCard from "./HomeCard";


type userType = {
    jwt: string,
    _id: string,
    username: string
}

const Home = () => {
    const [user, setUser] = useState<userType | null>(null);
    const [userrs, setUserrs] = useState<any | null>(null);
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem("username");
        console.log("logged out");
        navigate("/login");
    }
    useEffect(() => {
        const savedUsername = JSON.parse(localStorage.getItem("username")!);

        // axios.get(`http://localhost:8000/products/${id}`)
        axios.get(`http://localhost:8000/products`)
            .then((res) => {
                const value = res.data;
                setUserrs(value);
                console.log(value);

            })
            .catch((err) => {
                console.log(err);
            })
        if (savedUsername) {
            setUser(savedUsername);
        }

    }, [])

    return (
        <>
            <div className="bg-gray-600 h-screen overflow-y-auto">
                <div className="navigation-bar flex justify-between item-center  bg-gray-300 p-5">
                    <div className="ml-20 font-bold text-green-900 ">Products Listing app</div>

                    <><div className=""></div><div className="flex gap-4">
                        {user ? (
                            <div className="text-black font-bold items-center">Welcome {user?.username}!</div>

                        ) : (
                            <p>Please log in.</p>
                        )}
                        <Link to="/likes">
                            <button className="rounded-md bg-red-600 p-3 text-white">Liked </button>
                        </Link>
                        <button onClick={handleClick} className="mr-20 rounded-md bg-blue-700 p-3 text-white">Log Out</button>
                    </div></>
                </div>
                <p className="flex items-center justify-center mt-20 font-bold">These are the list of all products:</p>
                <div className=" items-center justify-center">
                    <div className="grid gap-10 grid-cols-4 mt-20 mx-10   ">
                        {
                            userrs?.map((userr: any, index: any) => {
                                return (
                                    <HomeCard key={index} details={userr} />


                                )


                            })

                        }
                    </div>
                </div>

            </div>





        </>
    )
};
export default Home;