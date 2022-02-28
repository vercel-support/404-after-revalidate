import styled from "styled-components";
import { PropsType } from ".";

export const StyledParagraph = styled.p<PropsType>`
  font-family: ${({ theme }): string => theme.fonts.paragraph};
  font-size: ${({ theme }): string => theme.paragraph.desktop.size};
  font-weight: ${({ theme }): string => theme.paragraph.desktop.weight};
  line-height: ${({ theme }): string => theme.paragraph.desktop.lineHeight};
  color: ${({ theme, color }): string => {
    switch (color) {
      default:
      case "black":
        return "#000";
      case "white":
        return theme.colors.layout.background.default;
    }
  }};
  margin: 0.5em 0;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding-left: 20px;
    text-indent: -13px;

    :before {
      content: "•";
      margin-right: 10px;
      color: ${({ theme }): string => theme.colors.secondary};
    }
  }

  a {
    color: ${({ theme, color }): string => {
      switch (color) {
        default:
        case "black":
          return "#000";
        case "white":
          return theme.colors.layout.background.default;
      }
    }};
  }

  strong {
    font-weight: 900;
  }
`;
