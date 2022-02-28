import styled from "styled-components";
import { PropsType } from ".";

export const BackgroundImage = styled.div<{
  imgSrc: string;
  color: PropsType["background"]["color"];
}>`
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  background: ${({ imgSrc, color }): string => {
    switch (color) {
      default:
      case "turquoise":
        return `linear-gradient(270deg, #008b73 10%, rgba(0, 141, 116, 0) 100%), url(${imgSrc})`;
      case "green":
        return `linear-gradient(270deg, #b6ac41 10%, rgba(182, 172, 65, 0) 100%), url(${imgSrc})`;
    }
  }};
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }): string => theme.breakpoints.lg}) {
    background: ${({ imgSrc, color }): string => {
      switch (color) {
        default:
        case "turquoise":
          return `linear-gradient(270deg, #008b73 10%, rgba(0, 141, 116, 0) 200%), url(${imgSrc})`;
        case "green":
          return `linear-gradient(270deg, #b6ac41 10%, rgba(182, 172, 65, 0) 200%), url(${imgSrc})`;
      }
    }};
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  height: calc(100% + 75px);
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: ${({ theme }): string => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const PatternWrapper = styled.div`
  position: absolute;
  width: 350px;
  bottom: 15px;
  left: 25%;

  @media (max-width: ${({ theme }): string => theme.breakpoints.lg}) {
    right: 0;
    bottom: 0;
    left: auto;
  }
`;

export const ContentWrapper = styled.div<{
  backgroundColor: PropsType["background"]["color"];
}>`
  li:before {
    color: ${({ theme, backgroundColor }): string =>
      backgroundColor === "green"
        ? theme.colors.primary
        : theme.colors.secondary};
  }
`;
