import React, {FC} from 'react';
import {Helmet} from "react-helmet";
import HelmetWithTitle from "@/UI/HelmetWithTitle.tsx";

const ProductDetailsPage:FC = () => {
    return (
        <>
            <HelmetWithTitle titleInfo={'Product Page'}/>
        <div>
            <h2>Product Details page</h2>
        </div>
        </>
    );
};

export default ProductDetailsPage;
