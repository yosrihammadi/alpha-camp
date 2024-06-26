import { Star } from "@/uikit/icons/star";

type ProductInformationsProps = {
  title: string;
  description: string;
};

const ProductInformations = ({
  title,
  description,
}: ProductInformationsProps) => {
  return (
    <>
      <h1 className="font-inika font-bold text-3xl text-green-400 mb-3">
        {title}
      </h1>
      <div className="flex items-center w-full space-x-[10px] mb-3">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Star key={index} />
          ))}
        <span className="text-base text-gray-500">4.5 Rates</span>
      </div>
      <p className="text-lg text-gray-600 mb-5">{description}</p>
    </>
  );
};

export default ProductInformations;
