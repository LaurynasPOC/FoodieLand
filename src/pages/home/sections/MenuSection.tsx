import React from "react";
import { MENU } from "constants/MenuData";
import MenuCard from "../elements/MenuCard";
import { SectionWrapper, Box, Image } from "components";

import { GridWrapper } from "components/wrappers/GridWrapper";

const MenuSection = () => (
  <SectionWrapper>
    <GridWrapper
      gridTemplateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
      ]}
      gridGap={["1rem", "1.5rem", "2rem"]}
    >
      {MENU.map(({ title, img, alt, category }) =>
        title === "ad" ? (
          <Box key={title}>
            <Image
              margin="1.875rem 0 0 0"
              src={img}
              alt="no ads pls"
              width="100%"
            />
          </Box>
        ) : (
          <MenuCard
            key={title}
            title={title}
            img={img}
            alt={alt}
            category={category}
          />
        )
      )}
    </GridWrapper>
  </SectionWrapper>
);

export default MenuSection;
