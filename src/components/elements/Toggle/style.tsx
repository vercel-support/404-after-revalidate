import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 20px;
  cursor: pointer;

  p {
    margin: 0;
  }

  h4 {
    margin-right: 20px;
  }

  svg {
    min-width: 18px;
  }

  :hover {
    h4 {
      color: ${({ theme }): string => theme.colors.secondary};
    }
  }
`;

export const Answer = styled.div<{ show: boolean }>`
  display: ${({ show }): string => (show ? "block" : "none")};
  margin-top: 5px;
`;
