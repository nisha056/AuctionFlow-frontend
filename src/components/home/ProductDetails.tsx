import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductDetails = (props: any) => {
    const [extraInfos, setExtraInfos] = useState([]);
    useEffect(() => {
        fetchDescription();
    }, []);
    const fetchDescription = async () => {
        try {
            console.log(props);
            axios.put(`http://localhost:8000/products/${props?.product_id}`, {
                extraInfo: extraInfos,
            }).then((res) => {
                console.log(res);
                setExtraInfos(res.data?.data);
            }).catch((err) => {
                console.log(err);
            })

        } catch (err) {
            console.log(err);

        }
    }
    return (
        <>
            <div className="bg-gray-50  overflow-y-auto my-20">
                <div className="my-20">
                    <div className="items-center justify-center">
                        <div className="grid md:gap-10 md:grid-cols-4 grid-cols-2 gap-2 md:mx-10 mt-10">
                            {

                                extraInfos?.map((product: any) => {
                                    return (
                                        <ProductCard key={product._id} details={product} />

                                    )
                                })
                            }
                        </div>

                    </div>

                </div>

            </div>

        </>

    );
}
export default ProductDetails;