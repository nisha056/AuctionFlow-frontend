import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { bid } from "../../api/api";
interface BidModalProps {
    product_id: string;
    updateLatestBid: (latestBid: number) => void;
    closeModal: () => void;
}
const BidModal: React.FC<BidModalProps> = ({ product_id, updateLatestBid, closeModal }) => {
    const [bidamount, setBidamount] = useState<number>();
    const handleBidamount = (e) => {
        setBidamount(Number(e.target.value));
    };
    const handleClick = async () => {
        try {
            bid(product_id, {
                username: (JSON.parse(localStorage.getItem("username") as string)?.username) ?? "No User",
                latest_bid: bidamount,
            })
                .then(() => {
                    updateLatestBid(bidamount);
                    toast.success("You have placed your bid successfully!");
                })
                .finally(() => {
                    closeModal();
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Error occured");
                });
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-5">
                <form className="space-y-7 items-center">
                    <input
                        className="w-full p-3 rounded-lg placeholder-gray-400 border focus:outline-none"
                        placeholder="Enter the bid amount"
                        onChange={handleBidamount}
                    />
                </form>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
                <button className="px-10 py-2 font-medium text-white mt-5 bg-blue-600 rounded-md" onClick={handleClick}>
                    Place bid
                </button>
            </div>
            <ToastContainer />
        </>
    );
};
export default BidModal;
