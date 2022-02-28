import { FC, useState, useRef, MutableRefObject } from "react";
import Paragraph from "../Paragraph";
import { FeedbackTextWrapper, Wrapper } from "./styles";

import { InputType } from "types";

type PropsType = {
  value?: string;
  placeholder?: string;
  autoComplete?: "name" | "email" | "tel";
  feedbackStatus: InputType["feedbackStatus"];
  feedbackText: InputType["feedbackText"];
  onChange(value: string): void;
  onBlur?(): void;
};

const Input: FC<PropsType> = (props): JSX.Element => {
  const [placeholder, setPlaceholder] = useState<string>(
    props.placeholder || ""
  );

  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const onClick = () => setPlaceholder("");

  const onBlur = () => {
    if (ref.current.value.length === 0) setPlaceholder(props.placeholder || "");
  };

  return (
    <Wrapper
      feedbackStatus={props.feedbackStatus}
      onClick={onClick}
      onBlur={onBlur}
    >
      <input
        ref={ref}
        placeholder={placeholder}
        autoComplete={props.autoComplete}
        onChange={(e) => props.onChange(e.target.value)}
        onBlur={props.onBlur}
      />
      <FeedbackTextWrapper>
        <Paragraph>{props.feedbackText}</Paragraph>
      </FeedbackTextWrapper>
    </Wrapper>
  );
};

export type { PropsType };
export default Input;
