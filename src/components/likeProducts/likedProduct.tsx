
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";

import LikedCard from "./likedCard";

const LikedProduct = () => {
    const [likes, setLikes] = useState<any | null>([]);
    useEffect(() => {
        fetchLikedItems();
    }, []);
    const fetchLikedItems = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("username")!);
            const response = await axios.get(`http://localhost:8000/products/likes/${user?._id}`);
            if (response.data?.success) {
                setLikes(response.data.data);
            }
        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="fixed top-0 z-10 mb-5 w-full">
                <Navigation />

            </div>
            <div className="bg-gray-50 h-screen overflow-y-auto mt-10">
                <div className="mt-20">
                    <div className="items-center justify-center">
                        <div className="grid md:gap-10 md:grid-cols-4 grid-cols-2 gap-2 md:mx-10 mt-10">
                            {
                                likes.length ?
                                    likes?.map((product: any) => {
                                        return (
                                            <LikedCard key={product._id} details={product} />

                                        )
                                    })
                                    :
                                    <>No Items to show</>
                            }
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
};
export default LikedProduct;