import styled from "styled-components";

export const HeaderWrapper = styled.div`
  .row {
    margin-top: -200px;
  }
`;

export const FeaturedSection = styled.div`
  .row {
    padding-right: 20px;
    padding-left: 20px;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.25);
    z-index: 2;
  }

  .row > .col:nth-child(2),
  .row > .col:nth-child(3) {
    margin-top: 40px;
    margin-bottom: 35px;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.md}) {
    .row > .col:nth-child(2) {
      margin-top: 0;
      margin-bottom: 0;
    }

    .row > .col:nth-child(4) {
      margin-top: 35px;
      margin-bottom: 35px;
    }
  }
  @media (max-width: ${({ theme }): string => theme.breakpoints.xs}) {
    .row > :not(.col:first-child) {
      margin-top: 15px;
      margin-bottom: 15px;
    }

    .row {
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`;
