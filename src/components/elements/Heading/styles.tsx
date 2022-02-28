import styled from "styled-components";
import { PropsType } from ".";

export const StyledHeading = styled.span<PropsType>`
  font-family: ${({ theme }): string => theme.fonts.heading};
  font-size: ${({ theme, type }): string => theme.heading.desktop[type].size};
  font-weight: ${({ theme, type }): string =>
    theme.heading.desktop[type].weight};
  line-height: ${({ theme, type }): string =>
    theme.heading.desktop[type].lineHeight};
  color: ${({ theme, color }): string => {
    switch (color) {
      case "green":
        return theme.colors.secondary;
      default:
      case "turquoise":
        return theme.colors.primary;
      case "white":
        return theme.colors.layout.background.default;
      case "black":
        return "#000";
    }
  }};
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
`;
