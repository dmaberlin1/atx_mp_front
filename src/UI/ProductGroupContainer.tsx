import React, {FC, ReactNode} from 'react';


interface IProductGroupContainer {
    children:ReactNode
}
const ProductGroupContainer:FC<IProductGroupContainer> = ({children}) => {
    return (
        <div className={'flex flex-wrap'}>
            <div className={'w-1/6 mb-5'}>{children}</div>
        </div>
    );
};

export default ProductGroupContainer;
