"use client";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

import arrowUp from "../../../../public/icons/arrowUp.svg";
import arrowDown from "../../../../public/icons/arrowDown.svg";

import productImg from "../../../../public/home/products/Image.jpg";
import productImg1 from "../../../../public/home/products/Image-1.jpg";
import productImg2 from "../../../../public/home/products/Image-2.jpg";
import productImg3 from "../../../../public/home/products/Image-3.jpg";
import productImg4 from "../../../../public/home/products/Image-4.jpg";
import productImg5 from "../../../../public/home/products/Image-5.jpg";
import productImg6 from "../../../../public/home/products/Image-6.jpg";
import productImg7 from "../../../../public/home/products/Image-7.jpg";
import productImg8 from "../../../../public/home/products/Image-8.jpg";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const { productName } = useParams();
  const product = products.find(
    ({ title }) => title.split(" ").join("-") === productName,
  );
  const [selectedImage, setSelectedImage] = useState<StaticImageData | string>(
    product?.images[0] || "",
  );

  const handleScroll = (direction: "UP" | "DOWN") => () => {
    if (carouselRef.current) {
      const scrollOffset = carouselRef.current?.offsetHeight / 2;
      carouselRef.current?.scrollBy(
        0,
        direction === "UP" ? -scrollOffset : scrollOffset,
      );
    }
  };

  if (!product) return null;
  return (
    <div className="grid grid-cols-12">
      <div className="grid grid-cols-12 gap-2 col-span-7">
        <div className="flex flex-col col-span-2 gap-2">
          <div className="h-full relative">
            <div
              ref={carouselRef}
              className="overflow-y-auto relative no-scrollbar h-full scroll-smooth"
            >
              <div className="grid gap-2 absolute top-0 left-0">
                {product.images.map((image, index) => (
                  <button
                    type="button"
                    key={`${product.title}-${index}`}
                    className="rounded-md overflow-hidden"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image}
                      alt=""
                      sizes="100%"
                      className="aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="z-10 absolute left-1/2 -translate-x-1/2 top-[-20px] h-[40px] w-[40px]"
              onClick={handleScroll("UP")}
            >
              <Image src={arrowUp} alt="Arrow Up" />
            </button>
            <button
              type="button"
              className="z-10 absolute left-1/2 -translate-x-1/2 bottom-[-20px] h-[40px] w-[40px]"
              onClick={handleScroll("DOWN")}
            >
              <Image src={arrowDown} alt="Arrow Down" />
            </button>
          </div>
        </div>
        <div className="col-span-10">
          <div className="rounded-md overflow-hidden">
            <Image
              src={selectedImage}
              alt={product.title}
              sizes="100%"
              className="aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
