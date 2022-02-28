import { FC } from "react";
import { Container, Row, Col } from "@piksl/grid";
import parse from "html-react-parser";

import ButtonRow from "components/blocks/ButtonRow";

import DotPattern from "components/elements/DotPattern";
import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";
import Button, {
  PropsType as ButtonPropsType,
} from "components/elements/Button";

import { Wrapper, DotPatternWrapper } from "./styles";

export type PropsType = {
  color?: "turquoise" | "green";
  height: "large" | "medium" | "small";
  width?: 6 | 9; // default: 6
  background: {
    image: string;
    withGradient?: boolean;
    position: "top" | "center";
  };
  title: string;
  subtitle?: string;
  content?: string;
  buttons?: Array<{
    title: string;
    href: string;
    color: ButtonPropsType["color"];
  }>;
};

const height = {
  large: "804px",
  medium: "648px",
  small: "521px",
};

const Header: FC<PropsType> = (props): JSX.Element => {
  let backgroundImage = `url(${props.background.image})`;

  if (props.background.withGradient) {
    backgroundImage =
      props.color === "green"
        ? `linear-gradient(90deg,rgba(250,240,125,1) 15%,rgba(0,0,0,0) 60%), url(${props.background.image})`
        : `linear-gradient(90deg,rgba(0,129,116,1) 15%,rgba(0,0,0,0) 60%), url(${props.background.image})`;
  }

  return (
    <Wrapper {...props}>
      <DotPatternWrapper>
        <DotPattern />
      </DotPatternWrapper>
      <Container
        minHeight={height[props.height]}
        backgroundImage={backgroundImage}
        backgroundSize="cover"
        backgroundPosition={props.background.position}
        justify="center"
      >
        <Row>
          <Col xl={props.width || 6} md={8} sm={10} xs={12}>
            <Heading type="h1" color="white">
              {props.title}
              <span>.</span>
            </Heading>

            {!!props.subtitle && (
              <Heading type="h3" color="white">
                {parse(props.subtitle)}
              </Heading>
            )}

            {!!props.content && (
              <Paragraph color="white" as="div">{parse(props.content)}</Paragraph>
            )}

            {!!props.buttons && (
              <ButtonRow>
                {props.buttons.map((button) => (
                  <Button
                    href={button.href}
                    color={button.color}
                    key={button.title}
                  >
                    {button.title}
                  </Button>
                ))}
              </ButtonRow>
            )}
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Header;
