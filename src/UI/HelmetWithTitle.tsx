import React, {FC} from 'react';
import {titleProd} from "@/constants/constants.ts";
import {Helmet} from "react-helmet";

interface IHelmetWithTitle {
    titleInfo:string
}
const HelmetWithTitle:FC<IHelmetWithTitle> = ({titleInfo}) => {
    return (
        <Helmet>
        <title>
      {titleInfo} {titleProd}
        </title>
        </Helmet>
    );
};

export default HelmetWithTitle;
