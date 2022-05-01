import React from "react";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Box } from "components/wrappers/Box";
import { StaticImage } from "gatsby-plugin-image";
import { TextBase } from "components/texts/TextBase";

import facebookIcon from "assets/images/facebook-icon.svg";
import twitterIcon from "assets/images/twitter-icon.svg";
import instagramIcon from "assets/images/instagram-icon.svg";

const Navigation = () => (
  <FlexWrapper
    borderBottom="1px solid rgba(0, 0, 0, 0.1);"
    display="flex"
    justifyContent="space-around"
  >
    <TextBase>
      <StaticImage
        src="../../assets/images/foodieland-logo.svg"
        alt="Logo"
        placeholder="tracedSVG"
      />
    </TextBase>
    <Box display="flex">
      <TextBase>Home</TextBase>
      <TextBase>Recipes</TextBase>
      <TextBase>Blog</TextBase>
      <TextBase>Contact</TextBase>
      <TextBase>About us</TextBase>
    </Box>
    <Box display="flex">
      <TextBase>
        <img src={facebookIcon} alt="facebook-icon" />
      </TextBase>
      <TextBase>
        <img src={twitterIcon} alt="facebook-icon" />
      </TextBase>
      <TextBase>
        <img src={instagramIcon} alt="facebook-icon" />
      </TextBase>
    </Box>
  </FlexWrapper>
);

export default Navigation;
