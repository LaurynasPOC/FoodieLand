export type Colors = keyof typeof colors;

const colors = {
  lightBlueBG: "#E7FAFE",
  secondary: "#29C0CD",
  accent: "#E34578",
  baseWhite: "#ffffff",
  baseBlack: "#000000",
  pillsBG: "rgba(0, 0, 0, 0.05)",
  pText: "rgba(0, 0, 0, 0.6)",
};

export const theme = {
  sizes: {},
  colors,
  radii: {
    primary: "1.875rem",
    blackBtn: "1rem",
    none: "0",
  },
  borders: { borderNone: "none" },

  fontFamily: { primary: "Inter" },
  fontSizes: {
    fs14: "0.875rem",
    fs16: "1rem",
    fs18: "1.125rem",
    fs24: "1.5rem",
  },
  fontWeights: {
    fw300: 300,
    fw400: 400,
    fw500: 500,
    fw600: 600,
    fw700: 700,
  },
  lineHeights: {
    lh8: "0.5rem",
    lh16: "1rem",
    lh24: "1.5rem",
    lh28: "1.75rem",
    lh32: "2rem",
  },
  breakpoints: ["24rem", "48rem", "90rem"] as unknown as Breakpoints,
  space: {
    auto: "auto",
    s0: "0",
    s4: "0.25rem",
    s8: "0.5rem",
    s12: "0.75rem",
    s16: "1rem",
    s20: "1.25rem",
    s24: "1.5rem",
    s28: "1.75rem",
    s32: "2rem",
    s40: "2.5rem",
    s48: "3rem",
    s56: "3.5rem",
    s64: "4rem",
  },
  zIndices: {
    base: 0,
    upperElement: 1,
    modal: 10,
    loader: 11,
  },
  typography: {
    h1: {
      //fontsizes
      mobibleFontSize: "4rem",
      tabletFontSize: "4.5rem",
      desktopFontSize: "5rem",
      //lineHeight
      mobileLineHeight: "5.25rem",
      tabletLineHeight: "5.875rem",
      desktopLineHeight: "6.5rem",
      //fontWeight
      fontWeight: 500,
    },
    h2: {
      //fontsizes
      mobibleFontSize: "3.5rem",
      tabletFontSize: "4rem",
      desktopFontSize: "4.5rem",
      //lineheight
      mobileLineHeight: "4.5625rem",
      tabletLineHeight: "5.21rem",
      desktopLineHeight: "5.875rem",
      //fontWeight
      fontWeight: 500,
    },
    h3: {
      //fontsizes
      mobibleFontSize: "1.5rem",
      tabletFontSize: "2rem",
      desktopFontSize: "3rem",
      //lineheight
      mobileLineHeight: "3.25rem",
      tabletLineHeight: "3.9rem",
      desktopLineHeight: "4.5625rem",
      //fontWeight
      fontWeight: 600,
    },
    h4: {
      //fontsizes
      mobibleFontSize: "2rem",
      tabletFontSize: "2.5rem",
      desktopFontSize: "3rem",
      //lineheight
      mobileLineHeight: "2.625rem",
      tabletLineHeight: "3.25rem",
      desktopLineHeight: "3.9375rem",
      //fontWeight
      fontWeight: 600,
    },
    h5: {
      //fontsizes
      mobibleFontSize: "1.625rem",
      tabletFontSize: "2rem",
      desktopFontSize: "2.5rem",
      //lineheight
      mobileLineHeight: "2.125rem",
      tabletLineHeight: "2.685rem",
      desktopLineHeight: "3.25rem",
      //fontWeight
      fontWeight: 600,
    },
    h6: {
      //fontsizes
      mobileFontSize: "1.5rem",
      tabletFontSize: "1.75rem",
      desktopFontSize: "2rem",
      //lineheight
      mobileLineHeight: "2rem",
      tabletLineHeight: "2.3rem",
      desktopLineHeight: "2.625rem",
      //fontWeight
      fontWeight: 600,
    },

    body16: {
      fontSize: "1rem",
      desktopLineHeight: "1.75rem",
      tabletLineheight: "1.5rem",
      mobileLineHeight: "1.2rem",
      fontWeight: 500,
    },

    caption14: {
      fontSize: "0.875rem",
      lineheight: "1rem",
      fontWeight: 500,
    },
  },
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
  _: T;
  lmobile: T;
  ltablet: T;
  desktop: T;
};
