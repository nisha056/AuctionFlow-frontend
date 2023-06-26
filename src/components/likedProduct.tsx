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
            // const userId = localStorage.getItem('userId');
            await axios.get(`http://localhost:8000/products/likes`)
                .then((res) => {
                    const value = res.data.data;
                    console.log(value);
                    setLikes(value);
                }).catch((err) => {
                    console.log(err);
                })


        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <p className=" flex justify-center items-center mt-10 font-bold">These are the list of the items that I liked:</p>
            {
                likes.length ?
                    likes?.map((like: any, index: any) => {
                        return (
                            <div className="grid grid-cols-4 mt-20 mx-10 gap-y-5 ">
                                <LikedCard key={index} details={like} />
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