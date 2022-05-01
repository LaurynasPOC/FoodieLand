import React from "react";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Box } from "components/wrappers/Box";
import { TextBase } from "components/texts/TextBase";
import HotRicepes from "assets/images/HotRecipes.png";

const LandingPageBanner = () => (
  <FlexWrapper display="flex">
    <Box>
      <Box
        bg="primary"
        borderRadius="30px"
        width="9.75rem"
        height="2.8125rem"
        display="flex"
        justifyContent="center"
        alignSelf="center"
      >
        <TextBase>
          <img src={HotRicepes} alt="Tasty food" />
        </TextBase>
        <TextBase>Hot Recipes</TextBase>
      </Box>
    </Box>
    <Box></Box>
  </FlexWrapper>
);

export default LandingPageBanner;
