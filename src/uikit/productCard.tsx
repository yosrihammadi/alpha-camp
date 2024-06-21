import Image, { StaticImageData } from "next/image";

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
    <div className="flex flex-col">
      <Image
        sizes="100%"
        alt={title}
        src={src}
        className="rounded-[10px] object-cover"
      />
      <div className="flex items-center justify-between mt-3 mb-1 lg:mt-6 lg:mb-2">
        <h3 className="font-bold text-base xl:text-2xl text-green-400">
          {title}
        </h3>
        <span className="text-gray-600 text-base">{price}TND</span>
      </div>
      <p className="text-gray-600 text-base line-clamp-2">{shortDescription}</p>
    </div>
  );
};

export default ProductCard;
