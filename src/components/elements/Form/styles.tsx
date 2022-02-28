import styled from "styled-components";
import { PropsType } from ".";

export const ErrorWrapper = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }): string => (isVisible ? "block" : "none")};
  border: 1px solid red;
  background-color: #ffd4d2;
  text-align: center;
  margin-bottom: 20px;
  padding: 5px;

  p {
    color: red;
  }
`;

export const FormFieldContainer = styled.form<{
  labelColor?: PropsType["labelColor"];
}>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  p,
  label {
    color: ${({ theme, labelColor }): string => {
      switch (labelColor) {
        default:
        case "black":
          return "#000";
        case "white":
          return theme.colors.layout.background.default;
      }
    }};
  }
`;
