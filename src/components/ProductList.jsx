import React from "react";
import ProductItem from "./ProductItem";

const products = [
  {
    id: 1,
    name: "Chair",
    price: 750,
    image:
      "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.25,f_auto,h_522,q_auto,w_930/c_pad,h_522,w_930/R1809716-01?pgw=1",
  },
  {
    id: 2,
    name: "Audio Speaker",
    price: 50,
    image:
      "https://purepng.com/public/uploads/medium/purepng.com-audio-speakeraudio-speakersaudiospeakerssound-boxspeaker-1701528309655xqgg7.png",
  },
  {
    id: 3,
    name: "Best coolers",
    price: 500,
    image:
      "https://www.hindustantimes.com/ht-img/img/2024/02/19/1600x900/best_cooler_1708344923882_1708344936198.jpg",
  },
  {
    id: 4,
    name: "Bag",
    price: 1250,
    image:
      "https://assets.aspinaloflondon.com/cdn-cgi/image/fit=pad,format=auto,quality=85,width=1300,height=1300/images/original/282758-011-1575-142100001.jpg",
  },
  {
    id: 1,
    name: "IPhone",
    price: 750,
    image:
      "https://th.bing.com/th/id/OIP.NW_7aK9YLNurS0EsxJRp7wHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "MR200 4G LTE",
    price: 250,
    image:
      "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.25,f_auto,h_522,q_auto,w_930/c_pad,h_522,w_930/Y2753520-02?pgw=1",
  },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
