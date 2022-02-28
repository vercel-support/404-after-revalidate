import styled from "styled-components";
import { PropsType } from ".";

export const StyledLink = styled.a<PropsType>`
  font-family: ${({ theme }): string => theme.fonts.paragraph};
  font-size: ${({ theme }): string => theme.paragraph.desktop.size};
  font-style: italic;
  text-decoration: none;
  color: ${({ theme, color }): string => {
    switch (color) {
      case "green":
        return theme.colors.secondary;
      case "turquoise":
        return theme.colors.primary;
      case "white":
        return theme.colors.layout.background.default;
      default:
      case "black":
        return "#000";
    }
  }};

  :hover {
    text-decoration: underline;
  }
`;
