
import { Card } from "@mantine/core";
import React from "react";

const LikedCard = (props: any) => {
    return (
        <>
            <Card className=" ">
                <div className="flex flex-col ">
                    <div className="flex items-center justify-center">
                        <Card className=" w-full" style={{ padding: 5, width: "200px" }}>
                            <img src={props.details?.image}
                                className="w-full h-25 object-cover "
                            />

                        </Card>
                    </div>
                    <p className="text-black font-bold flex justify-center ">{props.details?.title}</p>
                    {/* <p className="text-gray-500 font-bold ">{props.details?.description}</p> */}
                    <p className="text-gray-600 flex items-center justify-center">End Date:{props.details?.enddate}</p>
                    <div className="flex  ">
                        <p className="text-gray-600"><b> Starting price : </b> <i>{props.details?.starting_amount}</i></p>
                    </div>
                </div>
            </Card>




        </>


    );
};
export default LikedCard;