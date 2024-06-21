import { TunisiaMap } from "@/uikit/icons/tunisiaMap";
import Image from "next/image";

const Discover = () => {
  return (
    <div className="bg-gray-700 bg-opacity-95">
      <div className="relative py-10 overflow-hidden">
        <div className="flex flex-col items-center z-10 relative">
          <span className="font-bold text-6xl text-white mb-2">
            Select a region
          </span>
          <span className="text-white text-lg max-w-[650px] text-center mb-12">
            Select a region to get a full acces to all information including
            campsites, camp centers, local guides and more
          </span>
          <TunisiaMap />
        </div>
        <Image
          src="/home/discover/trees.svg"
          fill
          sizes="100%"
          alt=""
          className="translate-y-[25%]"
        />
      </div>
    </div>
  );
};

export default Discover;
