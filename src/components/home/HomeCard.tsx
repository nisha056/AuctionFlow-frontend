import { Card, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { Heart } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BidModal from "./bidModal";
import ProductDetails from "./ProductDetails";



const HomeCard = (props: any) => {
    const [productDetails, setProductDetails] = useState<any>(props.details);
    const [latestBid, setLatestBid] = useState(props.details?.latest_bid);
    const user = JSON.parse(localStorage.getItem("username")!);
    const navigate = useNavigate();
    const handleClick = async () => {
        try {

            const response = await axios.post(`http://localhost:8000/products/like/${props.details?._id}`,
                { user_id: user?._id });
            const item = response.data?.data?.title;
            if (response.data?.success) {
                setProductDetails(response.data?.data);
                if (productDetails?.like?.includes(user?._id)) {
                    toast.error(`You unliked ${item}`);
                } else {
                    toast.success(`You liked ${item}`);
                }
            }
        } catch (err) {
            console.error(err)
        }
    }
    const [opened, { open, close }] = useDisclosure(false);

    const handleMore = (id: string) => {
        navigate(`/product_details/${id}`)
    }
    return (
        <>
            <Modal opened={opened} onClose={close} >
                <BidModal closeModal={close} updateLatestBid={(latest_bid) => {
                    setLatestBid(latest_bid)
                }} product_id={props?.details?._id} />
            </Modal>
            <Card className=" p-0 my-5" style={{ backgroundColor: "whiteblue" }} >
                <div className="flex flex-col  ">
                    <div className="flex items-center justify-center">
                        <img src={props.details?.image}
                            className=" object-fill  "
                        />
                    </div>
                    <p className="text-xl text-gray-700 font-bold flex justify-center ">{props.details?.title}</p>
                    <p className="text-gray-500 flex items-center justify-center text-xs font-medium uppercase tracking-wider my-3">Ends on {props.details?.enddate.slice(0, 10)}</p>
                    <div className="flex justify-between w-full md:gap-5 text-sm mx-3 md:my-4 md:mx-10">
                        <div className="flex w-1/2 flex-col gap-1">
                            <div className="text-gray-600 text-xs uppercase tracking-wider ">Starting Price</div>
                            <div className="text-xl font-medium">{props.details?.starting_amount}</div>
                        </div>
                        <div className="flex w-1/2 flex-col gap-1">
                            <div className="text-gray-600 text-xs uppercase tracking-wider">Latest Bid Rate </div>
                            <div className="text-xl font-medium">{latestBid}</div>
                        </div>
                    </div>
                    <div className="flex items-center md:justify-between  mx-10">
                        <Heart
                            size="32"
                            variant={productDetails?.like?.includes(user?._id) ? "Bold" : "Outline"}
                            color={productDetails?.like?.includes(user?._id) ? "red" : "blue"}
                            onClick={handleClick}
                        />
                        <button onClick={open} className="rounded-md bg-sky-50 px-6 py-2 ml-auto text-sky-600 mb-2" >Bid</button>
                    </div>
                    <ToastContainer />
                </div>
                <button className=" flex items-center  rounded-md bg-sky-600 px-6 py-2  text-white font-bold mb-2" onClick={() => {
                    handleMore(props.details._id)
                }}>See more</button>
            </Card >
        </>

    )
};
export default HomeCard;