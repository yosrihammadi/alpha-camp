import Image, { StaticImageData } from "next/image";
import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  src: StaticImageData | string;
};

const FeatureCard = ({ title, description, src }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={src} sizes="100%" alt="" className="lg:mb-7 mb-4" />
      <h3 className="font-inika font-bold text-xl text-gray-800 mb-2 lg:mb-4">
        {title}
      </h3>
      <p className="font-inika text-base text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
