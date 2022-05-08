import React from "react";
import { FlexWrapper, Image, Typography } from "components";

interface Props {
  src: string;
  text: string;
  alt: string;
}

const ImgAndText: React.FC<Props> = ({ src, alt, text }) => (
  <FlexWrapper>
    <Image src={src} alt={alt} />
    <Typography pl="s8">{text}</Typography>
  </FlexWrapper>
);

export default ImgAndText;
