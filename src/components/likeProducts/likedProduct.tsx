
import axios from "axios";
import React, { useEffect, useState } from "react";
import LikedCard from "./likedCard";

const LikedProduct = () => {
    const [likes, setLikes] = useState<any | null>([]);
    useEffect(() => {
        fetchLikedItems();
    }, []);
    const fetchLikedItems = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("username")!);
            const response = await axios.get(`http://localhost:8000/products/likes/${user._id}`);
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
            <p className=" flex justify-center items-center mt-10 font-bold">These are the list of the items that I liked:</p>
            <div className="items-center justify-center">
                <div className="grid gap-10 grid-cols-4 mx-10 mt-10">
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

        </>

    )
};
export default LikedProduct;