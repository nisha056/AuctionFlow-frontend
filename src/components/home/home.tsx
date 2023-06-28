import React, { useEffect, useState } from "react";
import { product } from "../../api/api";
import Navigation from "../Navigation";
import HomeCard from "./HomeCard";

const Home = () => {

    const [userrs, setUserrs] = useState<any | null>(null);
    useEffect(() => {
        product()
            .then((res) => {
                const value = res.data;
                setUserrs(value);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    return (
        <>
            <div className="fixed top-0 z-10 w-full">
                <Navigation />
            </div>
            <div className="bg-gray-100  overflow-y-auto my-20">
                <div className=" items-center justify-center">
                    <div className="grid md:gap-10 md:grid-cols-4 grid-cols-2 gap-2 mt-20 md:mx-10   ">
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