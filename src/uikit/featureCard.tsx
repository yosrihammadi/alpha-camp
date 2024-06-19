import Image, { StaticImageData } from "next/image";
import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  src: StaticImageData;
};

const FeatureCard = ({ title, description, src }: FeatureCardProps) => {
  return (
    <div className="flex flex-col w-1/3 text-center">
      <Image src={src} sizes="100%" alt="" />
      <h3 className="font-inika font-bold text-xl text-gray-700">{title}</h3>
      <p className="font-inika text-base text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
