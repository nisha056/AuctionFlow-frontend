import { Card } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "../../pages/Navigation";
const ProductDetails = () => {
    const { id } = useParams();
    const [extraInfo, setExtraInfo] = useState(null);
    const [title, setTitle] = useState(null);
    const [image, setImage] = useState(null);
    const [startingprice, setStartingprice] = useState(null);
    const [latestbid, setLatestbid] = useState(null);
    const [date, setDate] = useState(null);
    const fetchDescription = async () => {
        try {
            axios.get(`http://localhost:8000/products/details/${id}`).then((res) => {
                console.log(res);
                setTitle(res.data?.updatedProduct?.title);
                setDate(res.data?.updatedProduct?.enddate)
                setStartingprice(res.data?.updatedProduct?.starting_amount);
                setLatestbid(res.data?.updatedProduct?.latest_bid);
                setImage(res.data?.updatedProduct?.image);
                setExtraInfo(res.data?.updatedProduct?.extraInfo);
            }).catch((err) => {
                console.log(err);
            })
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchDescription();
    }, []);
    return (
        <>
            <div className="fixed top-0 z-10 w-full">
                <Navigation />
            </div>
            <div className=" mx-10 mt-20 md:flex md:justify-between ">
                <div className="md:flex md:items-center w-full h-full  mt-20 ">
                    <img src={image}
                        alt="item"
                        className=""
                    />
                </div>
                <div className="flex w-full md:my-20 my-5 md:mx-10">
                    <Card className="p-0" >
                        <p className="text-red-400 flex  text-xl font-medium uppercase tracking-wider md:my-3  ">Bidding ends on {date?.slice(0, 10)}</p>
                        <p className="text-gray-500 flex  text-xs font-medium uppercase tracking-wider  my-3 "><em>So hurry up and grab this opportunity !</em></p>
                        <Link to="/home">
                            <p className="text-gray-500 flex  text-xs font-medium uppercase tracking-wider my-3"><em>Visit the home page for biding product </em></p>
                        </Link>
                        <div className="flex w-full md:gap-5 text-sm md:my-20 my-3 ">
                            <div className="flex w-1/2 flex-col gap-1">
                                <div className="text-gray-800 text-xs uppercase tracking-wider ">Starting Price</div>
                                <div className="text-xl font-medium">{startingprice}</div>
                            </div>
                            <div className="flex w-1/2 flex-col gap-1 ">
                                <div className="text-gray-800 text-xs uppercase tracking-wider">Latest Bid</div>
                                <div className="text-xl font-medium">{latestbid}</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <p className="text-2xl text-gray-700 font-bold mx-10 my-3 ">{title}</p>
            <p className="mx-10 text-gray-700">{extraInfo}</p>
            <div className="md:hidden">
                <Link to="/home">
                    <button className="px-5 py-2 mx-10 bg-sky-600 rounded text-white my-10">Return</button>
                </Link>
            </div>
        </>
    );
}
export default ProductDetails;