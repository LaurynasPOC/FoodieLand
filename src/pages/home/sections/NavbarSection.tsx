import React from "react";
import { Image, FlexWrapper, Typography, Box } from "components";
import { NAVBARDATA } from "constants/NarbarData";
import { useQuery } from "styles/breakpoints";

const NavbarSection = () => {
  const logo = NAVBARDATA[0].logo;
  const NavbarInfo: string[] = [
    "Home",
    "Recipes",
    "Blog",
    "Contact",
    "About us",
  ];

  const { isTablet } = useQuery();

  return (
    <Box px="s24" py="s24" borderBottom="1px solid rgba(0, 0, 0, 0.1)">
      <FlexWrapper
        textAlign="center"
        display={["block", "block", "flex"]}
        justifyContent={isTablet ? "center" : "space-between"}
      >
        <Image src={logo} alt="logo" />
        <FlexWrapper
          my={isTablet ? "s16" : "s0"}
          justifyContent={isTablet ? "center" : ""}
        >
          {NavbarInfo.map((title, i) => (
            <Typography key={i} mx={["s4", "s8", "s16"]}>
              {title}
            </Typography>
          ))}
        </FlexWrapper>
        <FlexWrapper justifyContent={isTablet ? "center" : ""}>
          <Image
            margin="0 0.5rem 0 0"
            src={NAVBARDATA[0].facebookIcon}
            alt={NAVBARDATA[0].facebookAlt}
          />
          <Image
            src={NAVBARDATA[0].twitterIcon}
            alt={NAVBARDATA[0].twitterAlt}
          />
          <Image
            margin="0 0 0 0.5rem"
            src={NAVBARDATA[0].instaIcon}
            alt={NAVBARDATA[0].instaAlt}
          />
        </FlexWrapper>
      </FlexWrapper>
    </Box>
  );
};
export default NavbarSection;
