import Image from "next/image";

const NextImage = ({
  src = "",
  style = {},
  onClick = () => {},
  objectFit = "contain",
  position = "relative",
  alt = "image",
  sizes,
}) => {
  return (
    <div
      style={{ ...style, position: position, overflow: "hidden" }}
      onClick={onClick}
    >
      <Image
        src={src}
        layout="fill"
        objectFit={objectFit}
        alt={alt}
        priority={true}
        unoptimized={true}
        sizes={sizes}
      />
    </div>
  );
};

export default NextImage;
