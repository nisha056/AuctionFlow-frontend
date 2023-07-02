import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../../pages/Navigation";
import LikedCard from "./LikedCard";
const LikedProduct: React.FC = () => {
    const [likes, setLikes] = useState<any[]>([]);
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
            <div className="fixed top-0 z-10 w-full">
                <Navigation />

            </div>
            <div className="bg-gray-50  overflow-y-auto my-20">
                <div className="my-20">
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