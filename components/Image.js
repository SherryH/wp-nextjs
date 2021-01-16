import Image from "next/image";

// Next Image layout size bug track
// https://github.com/vercel/next.js/discussions/18739

const ImageComponent = ({ src, ...otherProps }) => {
  if (src) {
    return <Image src={src} {...otherProps} layout="fill" />;
  }
  return <img src={src} {...otherProps}></img>;
};

export default ImageComponent;
