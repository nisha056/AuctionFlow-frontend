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
            <div className="navigation-bar flex justify-between">
                <div className="ml-20 font-bold ">Products Listing app</div>

                <><div >Welcome !</div><div className="flex gap-4">
                    {user ? (
                        <div> {user?.username}</div>

                    ) : (
                        <p>Please log in.</p>
                    )}
                    <Link to="/my_products">
                        <button className="underline">My Products</button>
                    </Link>
                    <Link to="/likes">
                        <button className="underline">Liked Products</button>
                    </Link>
                    <button onClick={handleClick} className="mr-20 underline">Log Out</button>
                </div></>
            </div>
            <p className="flex items-center justify-center mt-20 font-bold">These are the list of all products:</p>

            <div className="grid grid-cols-4 mt-20 mx-10 gap-y-5 ">
                {
                    userrs?.map((userr: any, index: any) => {
                        return (
                            <HomeCard key={index} details={userr} />


                        )


                    })

                }
            </div>


        </>
    )
};
export default Home;