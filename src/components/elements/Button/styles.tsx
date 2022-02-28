import styled from "styled-components";
import { PropsType } from ".";

export const StyledButton = styled.button<PropsType>`
  width: fit-content;
  min-height: 35px;
  border: none;
  border-radius: 10px;
  padding: 10px 15px 8px;
  background-color: ${({ theme, color }): string => {
    switch (color) {
      case "turquoise":
        return theme.colors.primary;
      case "green":
        return theme.colors.secondary;
    }
  }};
  font-family: ${({ theme }): string => theme.fonts.heading};
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  color: #fff !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 15px;

  :hover {
    opacity: 0.9;
  }
`;
