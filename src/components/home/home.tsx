import { Pagination } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { product } from "../../api/api";
import Footer from "../../pages/Footer";
import Navigation from "../../pages/Navigation";
import HomeCard from "./HomeCard";
const Home = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [verified, setVerified] = useState(false);
    const [value, setValue] = useState('');
    const itemsPerPage = 8;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        verifyToken();
    }, [currentPage, verified, value]);

    const verifyToken = async () => {
        try {
            let token = (JSON.parse((localStorage.getItem('username') as string))?.jwt);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            if (token) {
                setVerified(true);
                fetchProducts(currentPage);
            } else {
                navigate("/login");
            }
        } catch (err) {
            console.error(err);
        }
    };

    const fetchProducts = (page: number) => {
        setLoading(true);
        product()
            .then((res) => {
                const totalProducts = res.data;
                // Filter products based on the search input
                const filteredProducts = totalProducts.filter((product) =>
                    product.title.toLowerCase().includes(value.toLowerCase())
                );
                const startIndex = (page - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const usersData = filteredProducts.slice(startIndex, endIndex);
                setUsers(usersData);
                const total = Math.ceil(filteredProducts.length / itemsPerPage);
                setTotalPages(total);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <>
            <div className="fixed top-0 z-10 w-full">
                <Navigation />
            </div>
            <div className="bg-gray-100 overflow-hidden screen mt-20">
                <div className="flex justify-end my-10">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        placeholder="Search by title"
                        className="rounded-lg shadow-md focus:outline-none px-12 py-2 mx-5"
                    />
                </div>
                <div className="items-center justify-center">
                    {
                        loading ? <div className="  text-center h-screen font-medium "> Loading.....</div> : users.length === 0 ? (
                            <div className="text-center  h-screen "><i> No matches found</i></div>
                        ) : (
                            <div className="grid md:gap-10 md:grid-cols-4 grid-cols-2 gap-2 mx-2 md:mx-10">
                                {users.map((user, index) => (
                                    <HomeCard key={index} details={user} />
                                ))}
                            </div>
                        )}

                </div>
            </div>
            <div className="my-10 flex justify-center">
                <Pagination
                    total={totalPages}
                    withEdges
                    value={currentPage}
                    onChange={handlePageChange} />
            </div>
            <div className="shadow-md  ">
                <Footer />
            </div>

            <ToastContainer />
        </>
    );
};

export default Home;
