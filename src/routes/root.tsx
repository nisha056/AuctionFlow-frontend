import React from "react";
import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <div className="w-full  overflow-y-auto" >
                    <Outlet />
                </div>
            </div>
        </>
    )
};
export default Root;