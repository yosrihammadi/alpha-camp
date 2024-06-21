import Image, { StaticImageData } from "next/image";
import React from "react";

type BlogCardProps = {
  title: string;
  description: string;
  src: StaticImageData;
};

const BlogCard = ({ title, description, src }: BlogCardProps) => {
  return (
    <div className="flex flex-col">
      <Image
        sizes="100%"
        alt={title}
        src={src}
        className="rounded-[10px] object-cover flex-1"
      />
      <div className="flex items-center justify-between mt-6 mb-2">
        <h3 className="font-bold text-base xl:text-2xl text-green-400">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  );
};

export default BlogCard;
