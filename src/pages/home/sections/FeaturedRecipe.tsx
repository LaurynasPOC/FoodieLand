import React from "react";

import { Box, FlexWrapper, SectionWrapper, Typography } from "components";
import { StaticImage } from "gatsby-plugin-image";
import ImgAndText from "../elements/buttons/ImgAndText";
import { BaseButton } from "components/buttons/elements/BaseButton";

const FeaturedRecipe = () => (
  <SectionWrapper>
    <FlexWrapper display={["block", "block", "flex"]}>
      <Box
        p="s24"
        borderBottomLeftRadius={["none", "none", "primary"]}
        borderTopLeftRadius={["primary", "primary", "primary"]}
        borderTopRightRadius={["primary", "primary", "none"]}
        bg="lightBlueBG"
        width={["", "", "660px"]}
      >
        <BaseButton type="submit" borderRadius="primary" bg="baseWhite">
          <ImgAndText src="hotRecipes" alt="tasty" text="Hot Recipes" />
        </BaseButton>

        <Typography my="s16" type="h5">
          Spici delicious chicken wings
        </Typography>
        <Typography
          lineHeight={["lh16", "lh16", "lh24"]}
          type="body16"
          color="pText"
        >
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </Typography>
        <FlexWrapper mt={["s8", "s16", "s32"]}>
          <BaseButton bg="pillsBG" borderRadius="primary">
            <ImgAndText src="clock" alt="clock is ticking" text="30 minutes" />
          </BaseButton>
          <BaseButton bg="pillsBG" ml="s16" borderRadius="primary">
            <ImgAndText src="forkAndKnife" alt="eat me" text="chicken" />
          </BaseButton>
        </FlexWrapper>
        <FlexWrapper mt={["s8", "s16", "s32"]} justifyContent="space-between">
          <FlexWrapper py={"s32"}>
            <StaticImage
              src="../../../assets/images/JonhSmith.png"
              alt="john connor"
            />
            <Box pl="s16">
              <Typography p="s0" fontSize="fs16" fontWeight="fw700">
                John Smith
              </Typography>
              <Typography p="s0" color="pText" fontSize="fs14">
                15 March 2022
              </Typography>
            </Box>
          </FlexWrapper>
          <BaseButton
            p={["s8", "s12", "s16"]}
            bg="baseBlack"
            borderRadius="blackBtn"
            alignSelf="center"
          >
            <Typography pr="s8" color="baseWhite">
              View Recipes
            </Typography>
            <StaticImage
              src="../../../assets/images/PlayCircle.svg"
              alt="play"
            />
          </BaseButton>
        </FlexWrapper>
      </Box>

      <Box display={["none", "none", "flex"]}>
        <StaticImage
          src="../../../assets/images/BannerFoto.png"
          alt="very tasty"
          placeholder="tracedSVG"
          style={{
            borderRadius: "0 1.875rem 1.875rem 0",
          }}
        />
      </Box>
      <Box display={["flex", "flex", "none"]}>
        <StaticImage
          src="../../../assets/images/BannerFoto.png"
          alt="very tasty"
          placeholder="tracedSVG"
          style={{
            borderRadius: "0 0 1.875rem 1.875rem",
          }}
        />
      </Box>
    </FlexWrapper>
  </SectionWrapper>
);

export default FeaturedRecipe;
