"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import ProductImageCarousel from "@/components/shop/productImageCarousel";
import { Star } from "@/uikit/icons/star";

import productImg from "../../../../public/home/products/Image.jpg";
import productImg1 from "../../../../public/home/products/Image-1.jpg";
import productImg2 from "../../../../public/home/products/Image-2.jpg";
import productImg3 from "../../../../public/home/products/Image-3.jpg";
import productImg4 from "../../../../public/home/products/Image-4.jpg";
import productImg5 from "../../../../public/home/products/Image-5.jpg";
import productImg6 from "../../../../public/home/products/Image-6.jpg";
import productImg7 from "../../../../public/home/products/Image-7.jpg";
import productImg8 from "../../../../public/home/products/Image-8.jpg";
import ProductInformations from "@/components/shop/productInformations";
import ProductOwner from "@/components/shop/productOwner";
import { Heart } from "@/uikit/icons/heart";

const products = [
  {
    title: "Camping Tent",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    images: [
      productImg,
      productImg,
      productImg,
      productImg,
      productImg,
      productImg,
      productImg,
    ],
  },
  {
    title: "Vintage Outdoor lamp",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    images: [
      productImg1,
      productImg1,
      productImg1,
      productImg1,
      productImg1,
      productImg1,
      productImg1,
    ],
  },
  {
    title: "Multi-Functional Tarp",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    images: [
      productImg2,
      productImg2,
      productImg2,
      productImg2,
      productImg2,
      productImg2,
      productImg2,
    ],
  },
  {
    title: "Outdoor Chair",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    images: [
      productImg3,
      productImg3,
      productImg3,
      productImg3,
      productImg3,
      productImg3,
      productImg3,
    ],
  },
  {
    title: "Camping Stove",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    images: [
      productImg4,
      productImg4,
      productImg4,
      productImg4,
      productImg4,
      productImg4,
      productImg4,
    ],
  },
  {
    title: "First Aid Kit",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    images: [
      productImg5,
      productImg5,
      productImg5,
      productImg5,
      productImg5,
      productImg5,
      productImg5,
    ],
  },
  {
    title: "Hammock 2P",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    images: [
      productImg6,
      productImg6,
      productImg6,
      productImg6,
      productImg6,
      productImg6,
      productImg6,
    ],
  },
  {
    title: "Camping Bag 90L",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    images: [
      productImg7,
      productImg7,
      productImg7,
      productImg7,
      productImg7,
      productImg7,
      productImg7,
    ],
  },
  {
    title: "Sleeping Bag -10°C",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    images: [
      productImg8,
      productImg8,
      productImg8,
      productImg8,
      productImg8,
      productImg8,
      productImg8,
    ],
  },
];

const Product = () => {
  const { productName } = useParams();
  const product = products.find(
    ({ title }) => title.split(" ").join("-") === productName,
  );

  if (!product) return null;
  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      <div className="grid grid-cols-12 gap-2 col-span-7">
        <ProductImageCarousel product={product} />
      </div>
      <div className="col-span-5 flex flex-col">
        <ProductInformations
          {...product}
          description={product.shortDescription}
        />
        <div className="mb-6 mt-auto">
          <ProductOwner />
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-full bg-green-400 rounded-[9px] px-4 py-3 text-white text-xl font-inika"
          >
            Add to cart
          </button>
          <button
            type="button"
            className="bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-3 text-white text-xl font-inika flex items-center justify-center"
          >
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
