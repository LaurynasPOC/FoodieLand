import React from "react";
import { Input } from "components/inputs/Input";
import { SectionWrapper, Box, Typography, ContentWrapper } from "components";

const SubscribeSection = () => {
  return (
    <Box margin="auto" width="40rem" borderRadius="primary" bg="lightBlueBG">
      <SectionWrapper>
        <ContentWrapper textAlign="center" maxWidth="40rem" height="17.625rem">
          <Box mt="s32" maxWidth="38.75rem">
            <Typography type="h5">Delicious to your inbox</Typography>
            <Typography color="pText" type="body16">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </Typography>
            <Input placeholder="Your email adress..." />
          </Box>
        </ContentWrapper>
      </SectionWrapper>
    </Box>
  );
};

export default SubscribeSection;
