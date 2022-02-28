import { FC } from "react";
import { Col, Container, Row } from "@piksl/grid";
import parse from "html-react-parser";

import theme from "lib/theme";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";

import {} from "./styles";

export type PropsType = {
  title?: string;
  content?: string;
};

const OneColumn_75: FC<PropsType> = (props): JSX.Element => (
  <Container backgroundColor={theme.colors.layout.background.default}>
    <Row padding={[0, 50]}>
      <Col xl={9} md={12}>
        {props.title && (
          <Heading type="h2" color="turquoise">
            {props.title}
            <span style={{ color: theme.colors.secondary }}>.</span>
          </Heading>
        )}
        {props.content && <Paragraph as="div">{parse(props.content)}</Paragraph>}
      </Col>
    </Row>
  </Container>
);

export default OneColumn_75;
