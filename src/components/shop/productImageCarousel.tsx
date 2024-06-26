import { useRef, useState } from "react";

import arrowUp from "../../../public/icons/arrowUp.svg";
import arrowDown from "../../../public/icons/arrowDown.svg";
import Image, { StaticImageData } from "next/image";

type ProductProps = {
  title: string;
  shortDescription: string;
  price: number;
  images: StaticImageData[];
};

const ProductImageCarousel = ({ product }: { product: ProductProps }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [selectedImage, setSelectedImage] = useState<number>(0);

  const handleScroll = (direction: "UP" | "DOWN") => () => {
    if (carouselRef.current) {
      const scrollOffset = carouselRef.current?.offsetHeight / 2;
      carouselRef.current?.scrollBy(
        0,
        direction === "UP" ? -scrollOffset : scrollOffset,
      );
    }
  };

  return (
    <>
      <div className="flex flex-col col-span-2 gap-2">
        <div className="h-full relative">
          <div
            ref={carouselRef}
            className="overflow-y-auto relative no-scrollbar h-full scroll-smooth snap-mandatory snap-y"
          >
            <div className="grid gap-2 absolute top-0 left-0">
              {product.images.map((image: StaticImageData, index: number) => (
                <button
                  type="button"
                  key={`${product.title}-${index}`}
                  className={`rounded-md overflow-hidden snap-end  box-content ${index === selectedImage ? "border-green-400 border-opacity-50 border-4" : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt=""
                    sizes="100%"
                    className="aspect-square object-cover rounded-md"
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
        <div className="rounded-md overflow-hidden max-h-[500px]">
          <Image
            src={product.images[selectedImage]}
            alt={product.title}
            sizes="100%"
            className="object-cover w-full h-full max-h-full"
          />
        </div>
      </div>
    </>
  );
};

export default ProductImageCarousel;
