import styled from "styled-components";
import { PropsType } from ".";

export const StyledWhiteSpace = styled.div<PropsType>`
  height: ${({ height }): string => {
    switch (height) {
      case 5:
        return "5px";
      case 25:
        return "25px";
      case 50:
        return "50px";
    }
  }};
`;
