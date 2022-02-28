import { FC } from "react";
import { StyledParagraph } from "./styles";

type PropsType = {
  as?: "span" | "div";
  color?: "black" | "white";
};

const Paragraph: FC<PropsType> = (props): JSX.Element => (
  <StyledParagraph {...props}>{props.children}</StyledParagraph>
);

export type { PropsType };
export default Paragraph;
