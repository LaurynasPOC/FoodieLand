export type Colors = keyof typeof colors;

const colors = {
  primary: "#101326",
  secondary: "#29C0CD",
  accent: "#E34578",
  white: "#ffffff",
  black: "#000000",
};

export const theme = {
  colors,
  borders: {},
  borderRadius: {
    base: "1.875rem",
  },
  fontFamily: { primary: "Inter" },
  fontSizes: {
    fs16: "1rem",
  },
  fontWeights: {
    fw700: 700,
  },
  lineHeight: {
    lh: "1rem",
  },
  breakpoints: ["24rem", "47rem", "90rem"] as unknown as Breakpoints,
  space: {
    s16: 2,
  },
  typography: {
    mobile: {
      h1: {
        fonstSize: "4rem",
        fontWeight: 500,
        lineHeight: "5.25rem",
      },
      h2: {
        fonstSize: "3.5rem",
        fontWeight: 500,
        lineHeight: "4.5625rem",
      },
      h3: {
        fonstSize: "2.5rem",
        fontWeight: 600,
        lineHeight: "3.25rem",
      },
      h4: {
        fonstSize: "2rem",
        fontWeight: 600,
        lineHeight: "2.625rem",
      },
      h5: {
        fonstSize: "1.625rem",
        fontWeight: 600,
        lineHeight: "2.125rem",
      },
      h6: {
        fonstSize: "1.5rem",
        fontWeight: 600,
        lineHeight: "2rem",
      },
    },
    desktop: {
      h1: {
        fontSize: "5rem",
        fontWeight: 500,
        lineHeight: "6.5rem",
      },
      h2: {
        fontSize: "4.5rem",
        fontWeight: 500,
        lineHeight: "5.875rem",
      },
      h3: {
        fontSize: "3.5rem",
        fontWeight: 600,
        lineHeight: "6.5rem",
      },
      h4: {
        fontSize: "3rem",
        fontWeight: 600,
        lineHeight: "3.9375rem",
      },
      h5: {
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: "3.25rem",
      },
      h6: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: "2.625rem",
      },
    },
    zIndex: {
      base: 0,
      upperElement: 1,
      modal: 10,
      loader: 11,
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
