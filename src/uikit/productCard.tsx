import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  shortDescription: string;
  price: number;
  src: StaticImageData | string;
};

const ProductCard = ({
  title,
  shortDescription,
  price,
  src,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col lg:max-w-full max-w-[400px] mx-auto relative">
      <Image
        sizes="100%"
        alt={title}
        src={src}
        className="rounded-[10px] object-cover w-full h-auto object-cover"
      />
      <div className="flex items-center justify-between mt-3 mb-1 lg:mt-6 lg:mb-2">
        <h3 className="font-bold text-base xl:text-2xl text-green-400">
          {title}
        </h3>
        <span className="text-gray-600 text-base">{price}TND</span>
      </div>
      <p className="text-gray-600 text-base line-clamp-2">{shortDescription}</p>
      <Link
        href={`/shop/${title.split(" ").join("-")}`}
        className="text-opacity-0 inline-block absolute h-full w-full top-0 left-0 text-transparent"
      >
        {title}
      </Link>
    </div>
  );
};

export default ProductCard;
