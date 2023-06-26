
import { Card } from "@mantine/core";
import React from "react";

const LikedCard = (props: any) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center   h-full  ">
                <Card className=" w-full" style={{ padding: 5, width: "200px" }}>
                    <img src={props.details?.image}
                        className="w-full h-25 object-cover "
                    />

                </Card>
                <p className="text-black font-bold ">{props.details?.title}</p>
                <p className="text-gray-500 font-bold ">{props.details?.description}</p>
                <p className="text-gray-600">{props.details?.date}</p>
            </div>
        </>


    );
};
export default LikedCard;