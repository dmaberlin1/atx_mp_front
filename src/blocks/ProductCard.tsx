import React, {FC, ReactNode} from 'react';
import {ReactComponent as HeartEmpty} from "@/assets/img/heart-empty.svg";
import {ReactComponent as HeartFilled} from "@/assets/img/heart-filled.svg";
import {
    Desc,
    Image,
    LikeWrapper,
    PriceDiscounted,
    PriceRegular, PriceRegularWhenDiscounted,
    PriceWrapper,
    Title,
    Wrapper
} from "@/blocks/ProductCardStyled.ts";
import {Link} from "react-router-dom";

interface IProductCard {
    id: number
    slug?: string
    imgSrc: string
    priceDiscounted: number
    price: number
    title: string
    desc: string
    // isLiked:boolean
    hideLikes?: boolean
}


const ProductCard: FC<IProductCard> = ({
                                           id, slug, imgSrc,
                                           price, priceDiscounted, title,
                                           desc, hideLikes = false,

// isLiked,
                                       }) => {
    return (
        <Wrapper>
            {!hideLikes && (
                <LikeWrapper
                    data-product-id={id}
                >
                    {/*{isLiked ? <HeartFilled/> :<HeartEmpty/>}*/}
                    <HeartEmpty/>
                </LikeWrapper>
            )}

            <Link to={`/product/${slug || id}`}>
                <Image src={imgSrc}/>
            </Link>
            <PriceWrapper>
                {Number.isInteger(priceDiscounted) ? <>
                    <PriceDiscounted>{priceDiscounted}$</PriceDiscounted>
                    <PriceRegularWhenDiscounted>{price}$</PriceRegularWhenDiscounted>
                </> : (
                    <PriceRegular>{price}$</PriceRegular>
                )}

            </PriceWrapper>

            <Title className={'h4'}>
                <Link to={`/product/${slug || id}`}>
                    {title}
                </Link>
            </Title>
            <Desc>{desc}</Desc>
            <Button>В корзину</Button>
        </Wrapper>
    );
};

export default ProductCard;
