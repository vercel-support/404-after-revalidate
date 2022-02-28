import React, { FC, useState } from "react";
import Box from "@piksl/box";
import { Plus, Minus } from "@styled-icons/fa-solid";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";

import { Wrapper, Answer } from "./style";
import theme from "lib/theme";

export type PropsType = {
  question: string;
  answer: string;
};

const Toggle: FC<PropsType> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)}>
      <Box justify="space-between" align="center">
        <Heading type="h4" color={isOpen ? "turquoise" : "black"}>
          {props.question}
        </Heading>
        {isOpen ? (
          <Minus size={18} color={theme.colors.secondary} />
        ) : (
          <Plus size={18} color={theme.colors.secondary} />
        )}
      </Box>
      <Answer show={isOpen}>
        <Paragraph>{props.answer}</Paragraph>
      </Answer>
    </Wrapper>
  );
};

export default Toggle;
