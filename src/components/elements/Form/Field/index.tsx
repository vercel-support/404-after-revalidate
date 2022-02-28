import React, { FC, FormEvent } from "react";
import { Col } from "@piksl/grid";
import parse from "html-react-parser";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";

import {
  FieldWrapper,
  Section,
  Label,
  Description,
  Input,
  Textarea,
  Radio,
} from "./styles";

export type PropsType = {
  type:
    | "section"
    | "text"
    | "radio"
    | "textarea"
    | "html"
    | "fileupload"
    | "consent"
    | "email";
  id: number;
  value?: string | File;
  formId: number;
  label: string;
  labelPlacement: "hidden_label";
  placeholder?: string;
  description: string;
  isRequired: boolean;
  choices?: Array<{ text: string; value: string }>;
  checkboxLabel: string;
  enableAutocomplete: true;
  autocompleteAttribute: string;
  layoutGridColumnSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  content: string;
  hasError: boolean;
  visibility: "hidden" | "visible";
  onChange(id: number, value: string | number | File): void;
};

const Field: FC<PropsType> = (props): JSX.Element => {
  if (props.visibility === "hidden") return <></>;

  const onChange = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value: string | number | File = e.currentTarget.value;

    switch (props.type) {
      case "consent": {
        const el = document.getElementById(props.label) as HTMLInputElement;
        value = el?.checked ? 1 : 0;

        props.onChange(props.id, value);
      }
      case "fileupload": {
        const files = (e.target as HTMLInputElement).files;

        if (files !== null) {
          const file = files[0];
          value = file;
        }

        props.onChange(props.id, value);
      }
      default: {
        props.onChange(props.id, value);
      }
    }
  };

  switch (props.type) {
    case "section": {
      return (
        <Col xl={12}>
          <Section>
            <Heading type="h4">{props.label}</Heading>
          </Section>
        </Col>
      );
    }

    case "email":
    case "text": {
      return (
        <Col xl={props.layoutGridColumnSpan || 12} sm={12}>
          <FieldWrapper hasError={!!props.hasError}>
            {props.labelPlacement !== "hidden_label" && (
              <Label htmlFor={props.label}>
                {parse(props.label)} {props.isRequired && "*"}
              </Label>
            )}
            <Input
              type="text"
              placeholder={props.placeholder}
              value={props.value as string}
              onChange={onChange}
              id={props.label}
            />
          </FieldWrapper>
        </Col>
      );
    }

    case "radio": {
      return (
        <Col xl={props.layoutGridColumnSpan || 12} sm={12}>
          <FieldWrapper hasError={!!props.hasError}>
            <Paragraph as="div">
              {parse(props.label)} {props.isRequired && "*"}
            </Paragraph>

            {props.choices &&
              props.choices.map((choice) => (
                <Radio key={`${props.id}-${choice.text}`}>
                  <input
                    type="radio"
                    name={props.label}
                    value={choice.value}
                    id={`${props.id}-${choice.text}`}
                    onChange={onChange}
                  />
                  <Label htmlFor={`${props.id}-${choice.text}`}>
                    {choice.text}
                  </Label>
                </Radio>
              ))}

            <Description>{props.description}</Description>
          </FieldWrapper>
        </Col>
      );
    }

    case "textarea": {
      return (
        <Col xl={props.layoutGridColumnSpan || 12} sm={12}>
          <FieldWrapper hasError={!!props.hasError}>
            <Label htmlFor={props.label}>
              {parse(props.label)} {props.isRequired && "*"}
            </Label>
            <Textarea onChange={onChange} id={props.label} />
            <Description>{props.description}</Description>
          </FieldWrapper>
        </Col>
      );
    }

    case "html": {
      return (
        <Col xl={props.layoutGridColumnSpan || 12} sm={12}>
          <Paragraph as="div">{parse(props.content)}</Paragraph>
        </Col>
      );
    }

    case "fileupload": {
      return (
        <Col xl={props.layoutGridColumnSpan || 12} sm={12}>
          <FieldWrapper hasError={!!props.hasError}>
            {props.labelPlacement !== "hidden_label" && (
              <Label htmlFor={props.label}>
                {parse(props.label)} {props.isRequired && "*"}
              </Label>
            )}
            <input type="file" onChange={onChange} id={props.label} />
            <Description>{props.description}</Description>
          </FieldWrapper>
        </Col>
      );
    }

    case "consent": {
      return (
        <Col xl={props.layoutGridColumnSpan || 12} sm={12}>
          <FieldWrapper hasError={!!props.hasError} inline>
            <Label htmlFor={props.label}>
              {props.checkboxLabel} {props.isRequired && "*"}
            </Label>
            <input
              type="checkbox"
              name={props.label}
              id={props.label}
              onChange={onChange}
              style={{ marginRight: "9px" }}
            />
          </FieldWrapper>
        </Col>
      );
    }

    default:
      return <></>;
  }
};

export default Field;
