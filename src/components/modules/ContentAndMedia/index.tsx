import { FC } from "react";
import Image from "next/image";
import { Col, Container, Row } from "@piksl/grid";
import parse from "html-react-parser";

import theme from "lib/theme";
import { MediaType } from "lib/wp/types";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";

import { ImageWrapper } from "./styles";

export type PropsType = {
  firstCol: {
    title?: string;
    content?: string;
  };
  secondCol: {
    media?: MediaType;
  };
};

const ContentAndMedia: FC<PropsType> = (props): JSX.Element => (
  <Container backgroundColor={theme.colors.layout.background.contrast}>
    <Row padding={[50, 150]} wrapReverse>
      <Col xl={6} md={12}>
        {props.firstCol.title && (
          <Heading type="h2">
            {props.firstCol.title}
            <span style={{ color: theme.colors.secondary }}>.</span>
          </Heading>
        )}
        {props.firstCol.content && (
          <Paragraph as="div">{parse(props.firstCol.content)}</Paragraph>
        )}
      </Col>

      {props.secondCol.media && (
        <Col xl={6} md={12}>
          <ImageWrapper>
            <Image
              src={props.secondCol.media.url}
              layout="fill"
              objectFit="contain"
            />
          </ImageWrapper>
        </Col>
      )}
    </Row>
  </Container>
);

export default ContentAndMedia;
