import styled from "styled-components/macro";

import {
  alignSelf,
  AlignSelfProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  BoxShadowProps,
  color,
  ColorProps,
  compose,
  display,
  flex,
  FlexProps,
  DisplayProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  zIndex,
  ZIndexProps,
} from "styled-system";

import { Theme } from "styles/theme";

const defaultButtonProps = compose(
  alignSelf,
  border,
  borderRadius,
  color,
  display,
  flex,
  layout,
  position,
  space,
  shadow,
  textAlign,
  zIndex
);

export interface DefaultButtonProps
  extends AlignSelfProps<Theme>,
    ColorProps<Theme>,
    PositionProps<Theme>,
    DisplayProps<Theme>,
    BoxShadowProps<Theme>,
    ShadowProps<Theme>,
    TextAlignProps<Theme>,
    ZIndexProps<Theme>,
    BorderProps<Theme>,
    BorderRadiusProps<Theme>,
    FlexProps<Theme>,
    SpaceProps<Theme>,
    LayoutProps<Theme> {
  type?: "button" | "submit" | "reset";
  fontWeight?: string;
  onClick?: () => void;
}

// export type ButtonStyles = Pick<
//   DefaultButtonProps,
//   "margin" | "width" | "padding"
// >;

export const BaseButton = styled.button<DefaultButtonProps>`
  display: flex;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  && {
    ${defaultButtonProps}
  }
`;
