import React from "react";
import {
  SectionWrapper,
  Box,
  Image,
  FlexWrapper,
  Typography,
} from "components";
import { BaseButton } from "components/buttons/elements/BaseButton";

const ChiefSection = () => {
  return (
    <SectionWrapper>
      <FlexWrapper display={["block", "block", "flex"]}>
        <Box maxWidth="29rem" alignSelf="center">
          <Typography type="h6">
            Everyone can be a chief in their own kitchen
          </Typography>
          <Typography
            lineHeight={["lh16", "lh24", "lh28"]}
            mt="s24"
            color="pText"
            type="body16"
          >
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </Typography>
          <BaseButton
            mt="s32"
            px="s32"
            py="s16"
            borderRadius="blackBtn"
            color="baseWhite"
            bg="baseBlack"
          >
            Learn More
          </BaseButton>
        </Box>
        <Box>
          <Image width="100%" src="chief" alt="best our chief" />
        </Box>
      </FlexWrapper>
    </SectionWrapper>
  );
};

export default ChiefSection;
