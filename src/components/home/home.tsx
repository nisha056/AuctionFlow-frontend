import { Pagination } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { product } from "../../api/api";
import Footer from "../../Footer";
import Navigation from "../Navigation";
import HomeCard from "./HomeCard";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [verified, setVerified] = useState(false)
    const itemsPerPage = 12;
    const navigate = useNavigate();
    useEffect(() => {
        verifyToken();
    }, [currentPage, verified]);

    const verifyToken = async () => {
        try {
            const token = (JSON.parse((localStorage.getItem('username') as any))?.jwt)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            const response = await axios.post("http://localhost:8000/users/verifytoken")
            if (response.status === 200) {
                setVerified(true);
                fetchProducts(currentPage);
            }
            else {
                navigate("/login");
            }
        }
        catch (err) {
            console.error(err);
        }

    }

    const fetchProducts = (page: number) => {
        product()
            .then((res) => {
                const value = res.data;
                const startIndex = (page - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const usersData = value.slice(startIndex, endIndex);
                setUsers(usersData);
                const total = Math.ceil(value.length / itemsPerPage);
                setTotalPages(total);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="fixed top-0 z-10 w-full">
                <Navigation />
            </div>
            <div className="bg-gray-100 overflow-hidden screen mt-20">
                <div className="items-center justify-center ">
                    <div className="grid md:gap-10 md:grid-cols-4 grid-cols-2 gap-2 mt-20 mx-2 md:mx-10">
                        {users.map((user, index) => (
                            <HomeCard key={index} details={user} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="my-10 flex justify-center">
                <Pagination total={totalPages} withEdges value={currentPage} onChange={handlePageChange} />
            </div>
            <div className="shadow-md">
                <Footer />
            </div>
            <ToastContainer />
        </>
    );
};

export default Home;
