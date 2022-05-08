import React, { useState } from "react";
import { Image, FlexWrapper, Typography, SectionWrapper } from "components";

import { Box } from "components";

interface MenuProps {
  title: string;
  img: string;
  alt: string;
  category?: string;
}

const MenuCard: React.FC<MenuProps> = ({ title, img, alt, category }) => {
  const [selected, setSelected] = useState(false);
  return (
    <SectionWrapper>
      <Box
        onClick={() => setSelected(!selected)}
        position="absolute"
        top="3rem"
        right="1rem"
      >
        {!selected ? (
          <Image src="emptyHeart" alt="not so lovely" />
        ) : (
          <Image src="heart" alt="lovely" />
        )}
      </Box>

      <Box maxHeight="24rem" bg="bannerBG" borderRadius="primary">
        <Image
          width="100%"
          borderRadius="1.875rem 1.875rem 0 0"
          src={img}
          alt={alt}
        />
        <Box p="s16">
          <Typography
            lineHeight={["lh16", "lh24", "lh32"]}
            fontSize={["fs14", "fs16", "fs24"]}
            fontWeight="fw600"
          >
            {title}
          </Typography>
          <FlexWrapper my={["s8", "s12", "s16"]}>
            <FlexWrapper>
              <Image src="clock" alt="clock" />
              <Typography pl="s8">30 minutes</Typography>
            </FlexWrapper>
            <FlexWrapper ml="s16">
              <Image src="forkAndKnife" alt="time to eat" />
              <Typography pl="s8">{category}</Typography>
            </FlexWrapper>
          </FlexWrapper>
        </Box>
      </Box>
    </SectionWrapper>
  );
};
export default MenuCard;
