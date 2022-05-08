import { Container, Typography } from "components";
import React from "react";
import FeaturedRecipe from "./sections/FeaturedRecipe";

import NavbarSection from "./sections/NavbarSection";
import CategoriesSection from "./sections/CategoriesSection";
import { Box } from "components";

import MenuSection from "./sections/MenuSection";
import ChiefSection from "./sections/ChiefSection";

const Home: React.FC = () => (
  <>
    <NavbarSection />
    <Container>
      <FeaturedRecipe />
      <Typography type="h3">Categories</Typography>
      <CategoriesSection />
      <Typography mt="s32" textAlign="center" type="h3">
        Simple and tasty recipes
      </Typography>
      <Box
        color="pText"
        as="p"
        m="auto"
        mt="s16"
        textAlign={["left", "center", "center"]}
        maxWidth="44.125rem"
      >
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
      </Box>
      <MenuSection />
      <ChiefSection />
    </Container>
  </>
);

export default Home;
