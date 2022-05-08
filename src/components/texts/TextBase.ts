import styled from "styled-components/macro";

import { Colors } from "styles/theme";

interface TextBaseStyles {
  borderRadius?: string;
  color?: Colors;
  fontSize?: string;
  fontWeight?: number;
  margin?: string | number;
  padding?: string;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
}

export const TextBase = styled.p<TextBaseStyles>`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || ""};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color, theme }) => (color ? theme.colors[color] : "")};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
`;
