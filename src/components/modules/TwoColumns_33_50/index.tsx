import { FC } from "react";
import { Col, Container, Row } from "@piksl/grid";
import parse from "html-react-parser";

import theme from "lib/theme";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";

import {} from "./styles";

export type PropsType = {
  firstCol: {
    title?: string;
    content?: string;
  };
  secondCol: {
    title?: string;
    content?: string;
  };
};

const TwoColumns_33_50: FC<PropsType> = (props): JSX.Element => (
  <Container backgroundColor={theme.colors.layout.background.default}>
    <Row padding={[50, 50]}>
      <Col xl={4} md={12}>
        {props.firstCol.title && (
          <Heading type="h2" color="turquoise">
            {props.firstCol.title}
            <span
              style={{
                color: theme.colors.secondary,
              }}
            >
              .
            </span>
          </Heading>
        )}
        {props.firstCol.content && (
          <Paragraph as="div">{parse(props.firstCol.content)}</Paragraph>
        )}
      </Col>
      <Col xl={6} md={12}>
        {props.secondCol.title && (
          <Heading type="h2" color="turquoise">
            {props.secondCol.title}
            <span
              style={{
                color: theme.colors.secondary,
              }}
            >
              .
            </span>
          </Heading>
        )}
        {props.secondCol.content && (
          <Paragraph as="div">{parse(props.secondCol.content)}</Paragraph>
        )}
      </Col>
    </Row>
  </Container>
);

export default TwoColumns_33_50;
