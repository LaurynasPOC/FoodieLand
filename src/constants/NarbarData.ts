export interface NavData {
  logo: string;
  title: string[];
  facebookIcon: string;
  facebookAlt: string;
  twitterIcon: string;
  twitterAlt: string;
  instaIcon: string;
  instaAlt: string;
}

export const NAVBARDATA: NavData[] = [
  {
    logo: "pageLogo",
    title: ["Home", "Recipes", "Blog", "Contact", "About us"],
    // linksRef: ["www.facebook.com", "www.google.com", "www.twitter.com"],
    facebookIcon: "fbIcon",
    facebookAlt: "facebook",

    twitterIcon: "twitterIcon",
    twitterAlt: "twitter",

    instaIcon: "instaIcon",
    instaAlt: "intagram",
  },
];
