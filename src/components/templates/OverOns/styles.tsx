import styled from "styled-components";

export const FeaturedSection = styled.div`
  .row {
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  h4 {
    width: 100%;
    margin-bottom: 10px;
  }

  > a {
    width: 30%;
    font-family: ${({ theme }): string => theme.fonts.heading};
    font-size: ${({ theme }): string => theme.heading.desktop.h5.size};
    font-style: normal;
    line-height: ${({ theme }): string => theme.heading.desktop.h5.lineHeight};
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.md}) {
    margin-top: 20px;

    > a {
      width: 50%;
    }
  }
`;
