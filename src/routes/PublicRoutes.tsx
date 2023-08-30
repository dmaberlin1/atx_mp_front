import {FC, lazy} from "react";
import React from 'react';
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {checkPathMatch, paths} from "@/routes/helpers.ts";

//lazy грузит только по необходимости, при первой загрузке бандла не загружаются, только при запросе
const HomePage = lazy(() => import('@/pages/HomePage.tsx'))
const ProductDetailsPage=lazy(()=>import('@/pages/ProductDetailsPage.tsx'))
const PublicRoutes: FC = () => {
    const location = useLocation()
    const isMatch = checkPathMatch(location.pathname, paths)
    return (
        <Routes>
            <Route path={paths.home} element={<HomePage/>}/>
            <Route path={paths.productDetails} element={<ProductDetailsPage/>}></Route>
            <Route path={'*'} element={!isMatch ? <Navigate to={paths.home}/> : null}/>
        </Routes>
    );
};

export default PublicRoutes;
