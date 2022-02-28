import styled from "styled-components";

export const StyledMenuItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: left;
  position: relative;

  a {
    font-family: ${({ theme }): string => theme.fonts.heading};
    text-decoration: none;
    color: #000;

    :hover {
      color: ${({ theme }): string => theme.colors.primary};
    }
  }

  > a {
    margin-top: 0;
  }

  :not(:last-child) {
    margin-right: 33px;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.lg}) {
    :not(:last-child) {
      margin-right: 25px;
    }
  }
`;

export const DropdownContainer = styled.ul<{ isVisible: boolean }>`
  width: 250px;
  list-style: none;
  position: absolute;
  top: 100%;
  left: -20px;
  padding: 20px 20px 0 20px;
  background-color: ${({ theme }): string =>
    theme.colors.layout.background.contrast};
  box-shadow: inset 0px 8px 6px -6px rgb(0 0 0 / 20%);
  display: ${({ isVisible }): string => (isVisible ? "block" : "none")};

  li:first-child {
    margin: 0 0 15px 0;
  }

  li:not(:first-child) {
    margin: 15px 0;
  }
`;
