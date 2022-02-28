import { FC, FormEvent } from "react";
import Link from "next/link";

import { getPathname } from "lib/helpers";

import { StyledButton } from "./styles";

export type PropsType = {
  color: "turquoise" | "green";
  href?: string;
  onClick?(event?: FormEvent): void;
};

const Button: FC<PropsType> = (props): JSX.Element => {
  if (!!props.href) {
    const href = getPathname(props.href);

    if (href.endsWith(".pdf")) {
      return (
        <StyledButton {...props} as="a" target="_blank">
          {props.children}
        </StyledButton>
      );
    }

    return (
      <Link href={href}>
        <StyledButton {...props} as="a">
          {props.children}
        </StyledButton>
      </Link>
    );
  }

  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
