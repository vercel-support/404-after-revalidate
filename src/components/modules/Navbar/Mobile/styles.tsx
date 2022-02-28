import styled from "styled-components";

export const Placeholder = styled.div`
  width: 100%;
  height: 80px;
  display: none;

  @media (max-width: ${({ theme }): string => theme.breakpoints.md}) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }): string =>
    theme.colors.layout.background.default};
  position: fixed;
  top: 0;
  z-index: 4;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
  display: none;

  .container,
  .row {
    padding: 0;
    height: 80px;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.md}) {
    display: block;
  }
`;

export const LogoWrapper = styled.div`
  height: 50px;
  width: 100%;
  position: relative;
  margin-top: 15px;
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 20px;
  cursor: pointer;

  @media (max-width: ${({ theme }): string => theme.breakpoints.xs}) {
    right: 10px;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  position: absolute;
  top: 80px;
  background: ${({ theme }): string => theme.colors.layout.background.default};
  z-index: -1;
  padding-top: 100px;
  box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.2);
  padding: 30px 20px;

  @media (max-width: ${({ theme }): string => theme.breakpoints.xs}) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const MenuItemContainer = styled.ul`
  margin: 0;
  padding: 0;
`;
