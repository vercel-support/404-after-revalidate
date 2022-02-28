import styled from "styled-components";

export const Placeholder = styled.div`
  width: 100%;
  height: 100px;

  @media (max-width: ${({ theme }): string => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }): string =>
    theme.colors.layout.background.default};
  position: fixed;
  top: 0;
  z-index: 3;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);

  :after {
    content: "";
    pointer-events: none;
    position: absolute;
    width: 50%;
    height: 30px;
    top: 0;
    right: 0;
    z-index: -1;
    background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 92.46%,
        #ffffff 100%
      ),
      linear-gradient(360deg, #f4f4f4 0%, rgba(244, 244, 244, 0) 50%);
  }

  .container,
  .row {
    padding: 0;
  }

  @media (max-width: ${({ theme }): string => theme.breakpoints.md}) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  height: calc(100% - 32px);
  position: relative;
  margin-top: 16px;
`;

export const TopBar = styled.ul`
  height: 30px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItemContainer = styled.ul`
  height: 70px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
