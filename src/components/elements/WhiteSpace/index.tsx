import { FC } from "react";

import { StyledWhiteSpace } from "./styles";

export type PropsType = {
  height: 5 | 25 | 50;
};

const WhiteSpace: FC<PropsType> = (props): JSX.Element => (
  <StyledWhiteSpace {...props} />
);

export default WhiteSpace;
