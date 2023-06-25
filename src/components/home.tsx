import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem("username");
        console.log("logged out");
        navigate("/login");
    }
    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            setUser(savedUsername);
        }
    }, [])
    return (
        <>
            <div className="  ">
                <div className="navigation-bar flex justify-between">
                    <div className="ml-20">Products</div>

                    <><div>Welcome</div><div className="flex gap-4">
                        {user ? (
                            <div> {user}!</div>
                        ) : (
                            <p>Please log in.</p>
                        )}
                        <button onClick={handleClick} className="mr-20">Log Out</button>
                    </div></>

                </div>
                <h1 className="mt-10  ml-20"> This is the home page</h1>
            </div>

        </>
    )
};
export default Home;