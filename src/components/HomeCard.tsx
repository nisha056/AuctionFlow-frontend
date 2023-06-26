import { Card } from "@mantine/core";
import axios from "axios";
import { Like } from "iconsax-react";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HomeCard = (props: any) => {
    const [productDetails, setProductDetails] = useState<any>(props.details);
    const user = JSON.parse(localStorage.getItem("username")!);
    const handleClick = async () => {
        try {

            const response = await axios.post(`http://localhost:8000/products/like/${props.details?._id}`, { user_id: user?._id });
            if (response.data?.success) {
                setProductDetails(response.data?.data);
                if (productDetails?.like?.includes(user?._id)) {
                    toast.success("Product is unliked");
                } else {
                    toast.success("Product is liked");
                }
            }
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center   h-full  ">
            <Card className=" w-full" style={{ padding: 5, width: "200px" }}>
                <img src={props.details?.image}
                    className="w-full h-25 object-cover "
                />

            </Card>
            <p className="text-black font-bold ">{props.details?.title}</p>
            <p className="text-gray-500 font-bold ">{props.details?.description}</p>
            <p className="text-gray-600">{props.details?.date}</p>
            <Like
                size="32"
                color={productDetails?.like?.includes(user?._id) ? "red" : "blue"}
                onClick={handleClick}
            />
            <ToastContainer />

        </div>

    )
};
export default HomeCard;