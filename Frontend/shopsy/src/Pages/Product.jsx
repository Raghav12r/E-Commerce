import React, { useContext, useState } from 'react';
import {ShopContext } from '../Context/Context';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import { useParams } from "react-router-dom";
import Fullinfo from '../Components/Fullinfo/Fullinfo';
import Desc from '../Components/Desc/Desc';
import Relatedproducts from '../Components/Relatedproducts/Relatedproducts';
import { useEffect } from 'react';

function Product() {

  const {itemdata}=useContext(ShopContext);
  
  const {productId}=useParams();
  const data=parseInt(productId)
  const item= itemdata.find(item => item.id === data);
  console.log(item);
 

  return (
    <div>
      {/* {console.log()} */}
      <Breadcrumbs product={item}/>
      {/* <Breadcrumbs cat={item.category} title={item.title}/> */}
      <Fullinfo product={item}/>
      <Desc/>
      <Relatedproducts/>
    </div>
  );
}

export default Product;
