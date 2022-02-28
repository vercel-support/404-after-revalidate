import styled from "styled-components";

export const Wrapper = styled.div`
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.md}) {
    .container {
      padding-bottom: 20px;
    }
    .col {
      margin-bottom: 25px;
    }
  }
`;

export const SocialIconsContainer = styled.div`
  a:not(:first-child) {
    margin-left: 10px;
  }
`;

export const QualityMarkContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const QualityMarkWrapper = styled.div`
  position: relative;
  width: 125px;
  height: 50px;
  margin-bottom: 20px;
`;

export const Socket = styled.div`
  .container {
    padding: 10px 40px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
