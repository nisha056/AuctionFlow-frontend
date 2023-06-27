
import { Card } from "@mantine/core";
import React from "react";

const LikedCard = (props: any) => {
    return (
        <>
            {/* <div className="flex flex-col items-center justify-center   h-full  ">
                <Card className=" w-full" style={{ padding: 5, width: "200px" }}>
                    <img src={props.details?.image}
                        className="w-full h-25 object-cover "
                    />

                </Card>
                <p className="text-black font-bold ">{props.details?.title}</p>
                <p className="text-gray-500 font-bold ">{props.details?.description}</p>
                <p className="text-gray-600">{props.details?.date}</p>
            </div> */}
            <Card className=" md:mr-0 md:p-5">
                <div className="flex flex-col    h-full ">
                    <Card className=" w-full" style={{ padding: 5, width: "200px" }}>
                        <img src={props.details?.image}
                            className="w-full h-25 object-cover "
                        />

                    </Card>
                    <p className="text-black font-bold flex justify-center ">{props.details?.title}</p>
                    <p className="text-gray-500 font-bold ">{props.details?.description}</p>
                    <p className="text-gray-600 flex items-center justify-center">End Date:{props.details?.enddate}</p>
                    <div className="flex  justify-between">
                        <p className="text-gray-600"><b> Starting price: </b> <i>{props.details?.starting_amount}</i></p>
                        <p className="text-gray-600 ml-auto"><b> Latest bid: </b> <i> {props.details?.latest_bid}</i></p>
                    </div>


                </div>
            </Card>




        </>


    );
};
export default LikedCard;