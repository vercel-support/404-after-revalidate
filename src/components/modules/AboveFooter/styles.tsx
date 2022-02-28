import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
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
