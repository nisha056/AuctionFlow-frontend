import React from "react";

const Footer = () => {
    return (
        <>
            <div className="footer-bar  bg-sky-100 px-10 py-5 shadow-md ">
                <div className="footer-start items-center flex flex-col">
                    <div className="text-xl font-bold text-sky-900"> Auction Flow</div>
                    <div className="text-sm font-bold text-sky-600 ">An online Bidding Platform</div>
                </div>
                <div className="py-1 w-full "></div>
                <div className="flex items-center justify-center">
                    <div className="text-gray-600"> @Copyright All rights reserved</div>
                </div>

            </div>
        </>

    );
}
export default Footer;