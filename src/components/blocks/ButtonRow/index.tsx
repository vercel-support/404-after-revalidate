import { FC } from "react";

import { Wrapper } from "./style";

export type PropsType = {};

const ButtonRow: FC<PropsType> = (props): JSX.Element => (
  <Wrapper>{props.children}</Wrapper>
);

export default ButtonRow;
