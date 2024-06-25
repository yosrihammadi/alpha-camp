import ProductCard from "@/uikit/productCard";

import productImg from "../../../public/home/products/Image.jpg";
import productImg1 from "../../../public/home/products/Image-1.jpg";
import productImg2 from "../../../public/home/products/Image-2.jpg";
import productImg3 from "../../../public/home/products/Image-3.jpg";
import productImg4 from "../../../public/home/products/Image-4.jpg";
import productImg5 from "../../../public/home/products/Image-5.jpg";
import productImg6 from "../../../public/home/products/Image-6.jpg";
import productImg7 from "../../../public/home/products/Image-7.jpg";
import productImg8 from "../../../public/home/products/Image-8.jpg";

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
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-9">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
