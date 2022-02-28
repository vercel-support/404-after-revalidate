import { FC } from "react";
import { StyledHeading } from "./styles";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type PropsType = {
  type: HeadingType;
  color?: "green" | "turquoise" | "white" | "black";
  as?: HeadingType | "span";
};

const Heading: FC<PropsType> = (props): JSX.Element => {
  const element = !!props.as ? props.as : props.type;

  return (
    <StyledHeading {...props} as={element}>
      {props.children}
    </StyledHeading>
  );
};

export type { PropsType };
export default Heading;
