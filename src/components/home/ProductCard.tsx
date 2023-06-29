
import { Card } from "@mantine/core";
import React from "react";

const ProductCard = (props: any) => {
    return (
        <>
            <Card className=" p-0" style={{ backgroundColor: "whiteblue" }}>
                <div className="flex flex-col  ">
                    <div className="flex items-center justify-center">
                        <img src={props.details?.image}
                            className=" object-fill  "
                        />
                    </div>
                    <p className="text-xl text-gray-700 font-bold flex justify-center ">{props.details?.title}</p>
                    <p className="text-gray-500 flex items-center justify-center text-xs font-medium uppercase tracking-wider my-3">Ends on {props.details?.enddate.slice(0, 10)}</p>
                    <div className="flex w-full md:gap-5 text-sm my-4 mx-10">
                        <div className="flex w-1/2 flex-col gap-1">
                            <div className="text-gray-600 text-xs uppercase tracking-wider ">Starting Price</div>
                            <div className="text-xl font-medium">{props.details?.starting_amount}</div>
                        </div>
                        <div className="flex w-1/2 flex-col gap-1">
                            <div className="text-gray-600 text-xs uppercase tracking-wider">Latest Bid</div>
                            <div className="text-xl font-medium">{props.details?.latest_bid}</div>

                        </div>
                    </div>
                    <div>{props.details?.extrainfo}</div>
                </div>
            </Card >
        </>


    );
};
export default ProductCard;