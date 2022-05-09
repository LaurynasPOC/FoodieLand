import React from "react";
import CategoriesElement from "../elements/CategoriesElement";
import { SectionWrapper } from "components";
import { FOOD } from "constants/CategoriesFoodData";
import { GridWrapper } from "components/wrappers/GridWrapper";

const CategoriesSection: React.FC = () => {
  return (
    <SectionWrapper>
      <GridWrapper
        gridTemplateColumns={[
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(6, 1fr)",
        ]}
        gridGap="1rem"
      >
        {FOOD.map(({ img, title, alt, bg }) => (
          <CategoriesElement
            key={title}
            src={img}
            title={title}
            alt={alt}
            backgroundImage={bg}
          />
        ))}
      </GridWrapper>
    </SectionWrapper>
  );
};
export default CategoriesSection;
