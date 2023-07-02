import { Card } from "@mantine/core";
import React from "react";

interface LikedCardProps {
    details: {
        image: string;
        title: string;
        enddate: string;
        starting_amount: number;
        latest_bid: number;
    };
}

const LikedCard: React.FC<LikedCardProps> = ({ details }) => {
    return (
        <>
            <Card className="p-0" style={{ backgroundColor: "whiteblue" }}>
                <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                        <img src={details.image} className="object-fill" />
                    </div>
                    <p className="text-xl text-gray-700 font-bold flex justify-center">{details.title}</p>
                    <p className="text-gray-500 flex items-center justify-center text-xs font-medium uppercase tracking-wider my-3">
                        Ends on {details.enddate.slice(0, 10)}
                    </p>
                    <div className="flex w-full md:gap-5 text-sm my-4 mx-10">
                        <div className="flex w-1/2 flex-col gap-1">
                            <div className="text-gray-600 text-xs uppercase tracking-wider">Starting Price</div>
                            <div className="text-xl font-medium">{details.starting_amount}</div>
                        </div>
                        <div className="flex w-1/2 flex-col gap-1">
                            <div className="text-gray-600 text-xs uppercase tracking-wider">Latest Bid Rate</div>
                            <div className="text-xl font-medium">{details.latest_bid}</div>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    );
};
export default LikedCard;
