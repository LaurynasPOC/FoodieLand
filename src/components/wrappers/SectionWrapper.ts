import styled from "styled-components/macro";

import { mobile, tablet } from "styles/breakpoints";
import { Colors } from "styles/theme";

interface SectionWrapperStyles {
  minHeight?: string;
  backgroundColor?: Colors;
  borderBottom?: string;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  position: relative;
  padding: 2rem 0;
  min-height: ${({ minHeight }) => minHeight || ""};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.colors[backgroundColor] : ""};
  border-bottom: ${({ borderBottom }) => borderBottom || ""};
`;
