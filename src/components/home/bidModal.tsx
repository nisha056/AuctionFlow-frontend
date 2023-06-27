import React from "react";

const BidModal = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center  w-full mt-5 ">
                <form className="space-y-7 items-center">
                    <input className="w-full p-3  rounded-lg placeholder-gray-400 border " placeholder="Enter the bid amount " />
                    <input className="w-full p-3  rounded-lg placeholder-gray-400 border" placeholder="Confirm the bid amount" />

                </form>
            </div>
            <div className="mt-5 flex flex-col items-center justify-center">
                <button className="p-3 w-full  font-medium text-white mt-5 bg-blue-600 rounded-md" >Place bid</button>
            </div>
        </>

    )
};
export default BidModal;