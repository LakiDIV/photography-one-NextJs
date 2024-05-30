import Image from "next/image";
import React from "react";

interface CarouselContentProps {
  imageUrl: string;
  altText?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const CarouselContent: React.FC<CarouselContentProps> = ({
  imageUrl,
  altText = "This image is missing an alt text",
  imageWidth = 1200,
  imageHeight = 400,
}) => {
  return (
    <div className="relative bg-secondary text-primery w-full h-full">
      <Image
        alt={altText}
        src={imageUrl}
        width={imageWidth}
        height={imageHeight}
        style={{ objectFit: "cover" }}
        className="w-full h-full shadow-md"
      />
    </div>
  );
};

export default CarouselContent;
