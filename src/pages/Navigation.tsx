import { Avatar } from "@mantine/core";
import { LogoutCurve } from "iconsax-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
    const [user, setUser] = useState<any | null>(JSON.parse(localStorage.getItem("username") as string));
    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem("username");
        navigate("/login");
    }

    return (
        <>
            <div className="px-20 navigation-bar flex justify-between items-center  bg-gray-50 py-5 shadow-md">
                <div className="navigation-start items-center flex gap-2">
                    <div className="w-full ">
                        <img
                            src="https://www.pampangadirectory.com/wp-content/uploads/2017/10/af-enterprise-logo.png"
                            alt="Logo"
                            className="mt-2 mb-2  object-scale-down h-10"
                        />
                    </div>
                    <div className="text-xl font-bold text-sky-900 ">AuctionFlow</div>
                </div>

                <div className="md:flex hidden items-center gap-4">
                    <Link to="/home">
                        <span className="hover:font-semibold">Home</span>
                    </Link>
                    <Link to="/likes">
                        <span className="hover:font-semibold">Saved</span>
                    </Link>
                    <Avatar radius={99} variant="filled" color={'blue'}>{user?.username.substring(0, 1).toUpperCase()}</Avatar>

                    <button onClick={handleClick} className="flex gap-2 items-center rounded-md bg-sky-50  px-6 py-2 text-sky-600">
                        <LogoutCurve size={18} />
                        Log Out
                    </button>
                </div>
            </div>
        </>
    );
};
export default Navigation; 