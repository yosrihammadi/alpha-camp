import Image from "next/image";

const ProductOwner = () => {
  return (
    <div>
      <p className="font-inika text-lg text-blue-800 mb-2">Owner:</p>
      <div className="flex items-center">
        <div className="overflow-hidden rounded-full">
          <Image
            src="/profile.jpeg"
            alt=""
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start ms-3">
          <span className="text-base font-inika text-blue-700">
            Mme Foulana Ben Foulen
          </span>
          <button type="button" className="text-base font-inika text-green-400">
            Show details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOwner;
