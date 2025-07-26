import React from "react";
import Image from "next/image";

interface ImageComProps {
  src: string;
  alt?: string;
  priority?: boolean;
}

const ImageCom: React.FC<ImageComProps> = ({
  src,
  alt = "Hero image",
  priority = false,
}) => {
  return (
    <div
      className="relative w-full aspect-[5/5.5] 
      max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] 2xl:max-w-[500px] mx-auto"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="600px"
        className="rounded-t-full object-cover border-[4px] sm:border-[6px] md:border-[8px] border-white/20"
      />
    </div>
  );
};

export default ImageCom;
