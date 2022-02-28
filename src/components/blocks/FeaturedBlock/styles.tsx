import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: ${({ theme }): string => theme.breakpoints.md}) {
    margin-top: 30px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 265px;
  height: 265px;
  margin-bottom: 30px;
`;
