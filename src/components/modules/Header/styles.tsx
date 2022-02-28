import styled from "styled-components";

import { PropsType } from ".";

export const Wrapper = styled.div<PropsType>`
  position: relative;
  overflow: hidden;

  .container {
    :before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: ${({ theme, color }): string => {
        switch (color) {
          case "green":
            return theme.colors.secondary;
          case "turquoise":
          default:
            return theme.colors.primary;
        }
      }};
      mix-blend-mode: multiply;
    }
  }

  h1 > span {
    margin-left: 5px;
    color: ${({ theme, color }): string => {
      switch (color) {
        case "green":
          return theme.colors.primary;
        case "turquoise":
        default:
          return theme.colors.secondary;
      }
    }};
  }

  h3 {
    font-weight: 400;
  }
`;

export const DotPatternWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 15px;
  right: 0;

  > svg {
    position: relative;
    right: 0;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.lg}) {
    width: 50%;
  }
  @media (max-width: ${({ theme }): string => theme.breakpoints.sm}) {
    width: 40%;
  }
  @media (max-width: ${({ theme }): string => theme.breakpoints.xs}) {
    display: none;
  }
`;
