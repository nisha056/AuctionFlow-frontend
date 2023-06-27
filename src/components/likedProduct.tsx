
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
            {
                likes.length ?
                    likes?.map((product: any) => {
                        return (
                            <div className="grid grid-cols-4 mt-20 mx-10 gap-y-5 ">
                                <LikedCard key={product._id} details={product} />
                            </div>

                        )
                    })
                    :
                    <>No Items to show</>
            }
        </>

    )
};
export default LikedProduct;