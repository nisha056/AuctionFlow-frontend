import { Card, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { Like } from "iconsax-react";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BidModal from "./bidModal";


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
            console.log(response);
        } catch (err) {
            console.error(err)
        }
    }
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Modal opened={opened} onClose={close} >
                <BidModal />

            </Modal>

            <Card className=" md:mr-0 md:p-5">
                <div className="flex flex-col    h-full ">
                    <div className="flex items-center justify-center">
                        <Card className=" w-full" style={{ padding: 5, width: "200px" }}>

                            <img src={props.details?.image}
                                className="w-full h-25 object-cover  "
                            />

                        </Card>
                    </div>
                    <p className="text-black font-bold flex justify-center ">{props.details?.title}</p>
                    <p className="text-gray-500 font-bold ">{props.details?.description}</p>
                    <p className="text-gray-600 flex items-center justify-center">End Date:{props.details?.enddate}</p>
                    <div className="flex  justify-between">
                        <p className="text-gray-600"><b> Starting price: </b> <i>{props.details?.starting_amount}</i></p>
                        <p className="text-gray-600 ml-auto"><b> Latest bid: </b> <i> {props.details?.latest_bid}</i></p>
                    </div>
                    <div className="flex items-center">
                        <Like
                            size="32"
                            color={productDetails?.like?.includes(user?._id) ? "red" : "blue"}
                            onClick={handleClick}
                        />
                        <button onClick={open} className="rounded-md bg-blue-600 p-2 w-1/2 ml-auto" >Bid</button>

                    </div>

                    <ToastContainer />

                </div>
            </Card >






        </>

    )
};
export default HomeCard;