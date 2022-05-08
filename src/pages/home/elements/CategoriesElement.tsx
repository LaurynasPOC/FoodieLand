import React from "react";
import { Image, Typography } from "components";
import { Box } from "components";

interface CategoriesProps {
  src: string;
  title: string;
  backgroundImage: string;
  alt: string;
}

const CategoriesElement: React.FC<CategoriesProps> = ({
  src,
  title,
  backgroundImage,
  alt,
}) => (
  <Box
    textAlign="center"
    borderRadius="primary"
    backgroundImage={backgroundImage}
  >
    <Image src={src} alt={alt} />
    <Typography fontWeight="fw600">{title}</Typography>
  </Box>
);

export default CategoriesElement;
