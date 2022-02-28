import { FC } from "react";
import NextLink from "next/link";

import { StyledLink } from "./styles";

export type PropsType = {
  href: string;
  target?: "_blank";
  color?: "green" | "turquoise" | "white" | "black";
};

const Link: FC<PropsType> = (props): JSX.Element => {
  if (props.target === "_blank")
    return <StyledLink {...props}>{props.children}</StyledLink>;

  return (
    <NextLink href={props.href} passHref>
      <StyledLink {...props}>{props.children}</StyledLink>
    </NextLink>
  );
};

export default Link;
