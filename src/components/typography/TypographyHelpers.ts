import { css } from "styled-components/macro";

import { Theme } from "styles/theme";
import { TextType } from "./Typography";

export const applyTextType = (type: TextType, theme: Theme) => {
  switch (type) {
    case "h1":
      return css`
        font-weight: ${theme.typography.mobile.h1.fontWeight};
        font-size: ${theme.typography.mobile.h1.fonstSize};
      `;
  }
};
