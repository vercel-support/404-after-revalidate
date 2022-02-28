import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  min-height: 300px;
  position: absolute;
  right: 0;

  @media (max-width: ${({ theme }): string => theme.breakpoints.md}) {
    position: inherit;
    width: 100%;

    img {
      margin-bottom: 50px !important;
    }
  }
`;
