import BackgroundWithTexture from "@/uikit/BackgroundWithTexture";
import ProductCard from "@/uikit/productCard";
import Description from "@/uikit/typography/description";
import Subtitle from "@/uikit/typography/subtitle";
import Title from "@/uikit/typography/title";

import productImg from "../../../public/home/products/Image.jpg";
import productImg1 from "../../../public/home/products/Image-1.jpg";
import productImg2 from "../../../public/home/products/Image-2.jpg";
import productImg3 from "../../../public/home/products/Image-3.jpg";
import productImg4 from "../../../public/home/products/Image-4.jpg";
import productImg5 from "../../../public/home/products/Image-5.jpg";
import productImg6 from "../../../public/home/products/Image-6.jpg";
import productImg7 from "../../../public/home/products/Image-7.jpg";
import productImg8 from "../../../public/home/products/Image-8.jpg";
import Link from "next/link";

const products = [
  {
    title: "Camping Tent",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    src: productImg,
  },
  {
    title: "Vintage Outdoor lamp",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    src: productImg1,
  },
  {
    title: "Multi-Functional Tarp",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    src: productImg2,
  },
  {
    title: "Outdoor Chair",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    src: productImg3,
  },
  {
    title: "Camping Stove",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    src: productImg4,
  },
  {
    title: "First Aid Kit",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    src: productImg5,
  },
  {
    title: "Hammock 2P",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    src: productImg6,
  },
  {
    title: "Camping Bag 90L",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    src: productImg7,
  },
  {
    title: "Sleeping Bag -10°C",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ipsum volutpat",
    price: 10.99,
    src: productImg8,
  },
];

const Shop = () => {
  return (
    <div className="relative py-10">
      <BackgroundWithTexture />

      <div className="max-w-[1370px] mx-auto px-6 lg:px-0">
        <div className="container mx-auto">
          <Subtitle>shop</Subtitle>
          <Title>
            <span className="font-normal">Alpha</span>Camp Shop
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            egestas nisi nec libero fermentum, a varius tortor venenatis. Sed
            vitae dolor interdum, semper leo at, tristique nisl. Maecenas vitae
            luctus tortor, vel efficitur sem. Maecenas tincidunt sem nec magna
            gravida varius. Aliquam nec ligula a augue congue condimentum.
            Pellentesque eget lorem euismod, viverra nisl in, viverra velit.
          </Description>
          <div className="flex items-center justify-between mb-8">
            <p className="font-bold text-5xl text-nray-800">
              Today’s Selection
            </p>
            <Link
              href="/shop"
              className="bg-green-400 font-bold text-lg text-white px-11 py-5 rounded-[10px]"
            >
              SHOP NOW
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-9">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
