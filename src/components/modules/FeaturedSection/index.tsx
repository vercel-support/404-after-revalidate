import { FC } from "react";
import { Col, Container, Row } from "@piksl/grid";
import parse from "html-react-parser";

import theme from "lib/theme";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";
import WhiteSpace from "components/elements/WhiteSpace";
import Button, {
  PropsType as ButtonPropsType,
} from "components/elements/Button";

import ButtonRow from "components/blocks/ButtonRow";

import { Wrapper } from "./styles";

export type PropsType = {
  color: "turquoise" | "green";
  title?: string;
  content?: string;
  button?: {
    title: string;
  } & ButtonPropsType;
};

const FeaturedSection: FC<PropsType> = (props): JSX.Element => (
  <Wrapper>
    <Container>
      <Row
        backgroundColor={
          props.color === "turquoise"
            ? theme.colors.primary
            : theme.colors.secondary
        }
        borderRadius="10px"
        padding={[65, 50]}
        margin={[-150]}
      >
        <Col xl={4} md={12}>
          {props.title && (
            <>
              <Heading type="h2" color="white">
                {props.title}
                <span style={{ color: theme.colors.secondary }}>.</span>
              </Heading>
              <WhiteSpace height={50} />
            </>
          )}
        </Col>

        <Col xl={6} md={12}>
          {props.content && (
            <Paragraph color="white" as="div">
              {parse(props.content)}
            </Paragraph>
          )}

          {props.button && (
            <ButtonRow>
              <Button {...props.button}>{props.button.title}</Button>
            </ButtonRow>
          )}
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default FeaturedSection;
