import { FC, useRef, KeyboardEvent } from "react";
import { Check } from "@styled-icons/fa-solid";

import theme from "lib/theme";

import { Wrapper, StyledCheckbox, Label } from "./styles";

type PropsType = {
  name?: string;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?(): void;
  onBlur?(): void;
};

const Checkbox: FC<PropsType> = (props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const toggle = (): void => {
    if (!props.disabled) {
      ref.current?.focus();
      if (!!props.onChange) props.onChange();
    }
  };

  return (
    <Wrapper>
      <StyledCheckbox
        disabled={!!props.disabled}
        onClick={toggle}
        onBlur={props.onBlur}
        onKeyPress={(e: KeyboardEvent) => (e.key === "Enter" ? toggle() : null)}
        tabIndex={0}
        ref={ref}
      >
        {props.checked ? <Check color={theme.colors.primary} /> : null}
        <input type="checkbox" id={props.name} />
      </StyledCheckbox>
      <Label htmlFor={props.name} disabled={!!props.disabled}>
        {props.children}
      </Label>
    </Wrapper>
  );
};

export type { PropsType };
export default Checkbox;
