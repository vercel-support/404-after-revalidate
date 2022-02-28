import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  h3 {
    display: none;
  }

  form {
    margin-top: 78px;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.md}) {
    .form-wrapper {
      margin-top: 10px;
    }
  }
`;
