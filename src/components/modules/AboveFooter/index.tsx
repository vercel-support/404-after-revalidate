import { FC } from "react";
import { Col, Container, Row } from "@piksl/grid";

import theme from "lib/theme";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";
import Button from "components/elements/Button";
import DotPattern from "components/elements/DotPattern";

import { Wrapper, DotPatternWrapper } from "./styles";

export type PropsType = {
  backgroundImage: string;
  title: string;
  content: string;
  button: {
    title: string;
    href: string;
  };
};

const AboveFooter: FC<PropsType> = (props): JSX.Element => (
  <Wrapper>
    <Container
      backgroundImage={`url(${props.backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <DotPatternWrapper>
        <DotPattern />
      </DotPatternWrapper>
      <Row padding={[150, 150]}>
        <Col xl={5} lg={6} md={12}>
          <Heading type="h2" color="white">
            {props.title}
            <span style={{ color: theme.colors.secondary }}>.</span>
          </Heading>
          <Paragraph color="white">{props.content}</Paragraph>
          <Button color="turquoise" href={props.button.href}>
            {props.button.title}
          </Button>
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default AboveFooter;
