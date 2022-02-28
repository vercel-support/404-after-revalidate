import styled from "styled-components";

export const StyledMenuItem = styled.li`
  list-style: none;

  position: relative;

  :not(:first-child) {
    margin-top: 25px;
  }

  a {
    font-size: 20px;
    line-height: 24px;
    font-family: ${({ theme }): string => theme.fonts.heading};
    text-decoration: none;
    color: #000;
    margin-bottom: 10px;

    :hover {
      color: ${({ theme }): string => theme.colors.primary};
    }
  }

  svg {
    position: absolute;
    right: 0;
  }
`;

export const DropdownContainer = styled.ul<{ isVisible: boolean }>`
  list-style: none;
  padding: 10px 0 0 25px;
  display: ${({ isVisible }): string => (isVisible ? "block" : "none")};

  li {
    margin: 15px 0;
  }
`;
