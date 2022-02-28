import { FC, useState, useRef, MutableRefObject } from "react";

import Paragraph from "components/elements/Paragraph";

import { Wrapper, FeedbackTextWrapper } from "./styles";

import { InputType } from "types";

type PropsType = {
  placeholder?: string;
  feedbackStatus: InputType["feedbackStatus"];
  feedbackText: InputType["feedbackText"];
  onChange(value: string): void;
  onBlur?(): void;
};

const Textarea: FC<PropsType> = (props): JSX.Element => {
  const [placeholder, setPlaceholder] = useState<string>(
    props.placeholder || ""
  );
  const ref = useRef() as MutableRefObject<HTMLTextAreaElement>;

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
      <textarea
        ref={ref}
        placeholder={placeholder}
        rows={6}
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
export default Textarea;
