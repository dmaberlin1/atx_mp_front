import React, {FC} from 'react';
import HelmetWithTitle from "@/UI/HelmetWithTitle.tsx";
import {PageWrapper, ProductGroup} from "@/App.styled.ts";
import ProductGroupContainer from "@/UI/ProductGroupContainer.tsx";
import {dummyProducts} from "@/constants/dummyProducts.ts";
import ProductCard from "@/blocks/ProductCard.tsx";
const HomePage:FC = () => {
    return (
        <>
           <HelmetWithTitle titleInfo={"Main"}/>
            <PageWrapper>
            <ProductGroup>
                <ProductGroupContainer>
                    {dummyProducts.map((product)=>(
                        <ProductCard
                            {...product}
                            key={product.id}
                        //isLiked={idsInFavorites.includes(p.id)}
                        />
                    ))}
                </ProductGroupContainer>
            </ProductGroup>

            </PageWrapper>




        </>
    );
};

export default HomePage;
