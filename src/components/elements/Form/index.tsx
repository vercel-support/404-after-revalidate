import React, { FC, FormEvent, useState, useEffect } from "react";
import { Col } from "@piksl/grid";
import Box from "@piksl/box";
import { GooSpinner } from "react-spinners-kit";
import parse from "html-react-parser";

import theme from "lib/theme";

import Heading from "components/elements/Heading";
import Button from "components/elements/Button";
import Paragraph from "components/elements/Paragraph";
import WhiteSpace from "components/elements/WhiteSpace";

import Field from "./Field";

import { ErrorWrapper, FormFieldContainer } from "./styles";
import { FormType } from "lib/wp/types";
import { postFormSubmission } from "lib/wp";

export type PropsType = FormType & {
  hideFormTitle?: boolean;
  initialValues?: { [key: string]: string };
  spinnerColor?: "green" | "turquoise" | "white";
  labelColor?: "black" | "white";
};

const Form: FC<PropsType> = (props): JSX.Element => {
  const [requiredFields, setRequiredFields] = useState<Array<number>>([]);
  const [values, setValues] = useState<{
    [index: number]: string | File;
  }>({});
  const [errorFields, setErrorFields] = useState<Array<number>>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [confirmationMessage, setConfirmationMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  let spinnerColors = {
    green: theme.colors.secondary,
    turquoise: theme.colors.primary,
    white: "#fff",
  };

  useEffect(() => {
    const requiredFields = props.fields
      .filter((field) => field.isRequired)
      .map((field) => field.id);

    setRequiredFields(requiredFields);
    setValues({ ...props.initialValues, ...values });
  }, [props.fields, props.initialValues]);

  const onChangeFormField = (fieldId: number, value: string | File) => {
    const oldValues = values;
    const newValues = { ...oldValues, [fieldId]: value };

    setValues(newValues);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formIsValid: boolean = true;
    let errorFields: Array<number> = [];

    requiredFields.forEach((field) => {
      if (!values[field]) {
        formIsValid = false;
        errorFields.push(field);
      }
    });

    if (formIsValid) {
      setErrorMessage("");
      setIsLoading(true);

      const formData = new FormData();
      props.fields.forEach((field) => {
        const value = values[field.id];
        let name = `input_${field.id}`;

        if (field.type === "consent") name = `input_${field.id}_1`;

        if (!!name && !!value) formData.append(name, value);
      });

      const response = await postFormSubmission(props.id, formData);

      if (response.is_valid) {
        setIsSent(true);
        setConfirmationMessage(response.confirmation_message);
        setIsLoading(false);
      } else {
        setIsSent(true);
        setErrorMessage("Daar ging iets mis! Probeer het later nog eens.");
        setIsLoading(false);
      }
    } else {
      setErrorMessage("Vul alsjeblieft alle verplichte velden in!");
      setErrorFields(errorFields);
    }

    const element = document.getElementById("error");
    if (!!element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
    }
  };

  return (
    <>
      <Col>
        <ErrorWrapper isVisible={!!errorMessage} id="error">
          {errorMessage && <Paragraph>{errorMessage}</Paragraph>}
        </ErrorWrapper>
        {!props.hideFormTitle && (
          <>
            <Heading type="h3">{props.title}</Heading>
            <WhiteSpace height={25} />
          </>
        )}
      </Col>

      {isSent && (
        <Col>
          <Box direction="column" align="center" padding={[50, 0]}>
            <Paragraph color={props.labelColor} as="div">
              {parse(confirmationMessage)}
            </Paragraph>
          </Box>
        </Col>
      )}

      {isLoading && (
        <Col>
          <Box direction="column" align="center" padding={[50, 0]}>
            <GooSpinner
              color={
                !props.spinnerColor
                  ? spinnerColors.turquoise
                  : spinnerColors[props.spinnerColor]
              }
            />
            <Paragraph color={props.labelColor}>
              Een moment geduld... Bezig met verzenden.
            </Paragraph>
          </Box>
        </Col>
      )}

      {!isLoading && !isSent && (
        <>
          <FormFieldContainer labelColor={props.labelColor}>
            {props.fields.map((field) => {
              const hasError = errorFields.indexOf(field.id) >= 0;

              return (
                <Field
                  {...field}
                  value={values[field.id] || ""}
                  hasError={hasError}
                  onChange={onChangeFormField}
                  key={field.id}
                />
              );
            })}
          </FormFieldContainer>

          <Col>
            <Button color="turquoise" onClick={onSubmit}>
              {props.button.text}
            </Button>
          </Col>
        </>
      )}
    </>
  );
};

export default Form;
