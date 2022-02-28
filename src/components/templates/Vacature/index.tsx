import { FC } from "react";
import Head from "next/head";
import { Col, Container, Row } from "@piksl/grid";
import parse from "html-react-parser";

import theme from "lib/theme";
import { PageType, VacancyType } from "types";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";
import WhiteSpace from "components/elements/WhiteSpace";
import Button from "components/elements/Button";

import ButtonRow from "components/blocks/ButtonRow";

import Navbar from "components/modules/Navbar";
import Header, {
  PropsType as HeaderPropsType,
} from "components/modules/Header";
import ImageAndContent, {
  PropsType as ImageAndContentPropsType,
} from "components/modules/ImageAndContent";
import AboveFooter, {
  PropsType as AboveFooterPropsType,
} from "components/modules/AboveFooter";
import Footer from "components/modules/Footer";

import { ApplyNow } from "./styles";

export type PropsType = PageType & {
  vacancy: VacancyType["acf"]["vacancy"];
  header: HeaderPropsType;
  function: {
    firstCol: {
      title: string;
      content: string;
    };
    secondCol: {
      content: string;
    };
  };
  description: {
    title: string;
    content: string;
  };
  imageAndContent: ImageAndContentPropsType;
  whatWeOffer: {
    title: string;
    content: string;
  };
  applyNow: {
    firstCol: {
      title: string;
    };
    secondCol: {
      content: string;
    };
  };
  aboveFooter: AboveFooterPropsType;
};

const Template: FC<PropsType> = (props): JSX.Element => (
  <>
    <Head>
      <title>{props.head.title}</title>
      {props.head.meta.map((item) => (
        <meta
          name={item.name}
          property={item.property}
          content={item.content}
          key={item.content}
        />
      ))}
    </Head>

    <Navbar {...props.options.acf} />

    <Header
      color="turquoise"
      background={props.header.background}
      height="small"
      width={9}
      title={props.vacancy.title}
      subtitle={`${props.vacancy.region} <span style="color: ${theme.colors.secondary}">|</span> ${props.vacancy.hoursPerWeek} <span style="color: ${theme.colors.secondary}">|</span> ${props.vacancy.education}`}
    />

    <Container backgroundColor={theme.colors.layout.background.default}>
      <Row padding={[50, 75]}>
        <Col xl={4} md={12}>
          <Heading type="h2" color="turquoise">
            {props.function.firstCol.title}
            <span
              style={{
                color: theme.colors.secondary,
              }}
            >
              .
            </span>
          </Heading>
          <Paragraph>{props.function.firstCol.content}</Paragraph>
        </Col>
        <Col xl={6} md={12}>
          <Paragraph as="div">{parse(props.function.secondCol.content)}</Paragraph>
        </Col>
      </Row>
    </Container>

    <Container backgroundColor={theme.colors.layout.background.contrast}>
      <Row padding={[50, 50]}>
        <Col xl={8} md={12}>
          <Heading type="h2">{props.description.title}</Heading>
          <Paragraph as="div">{parse(props.description.content)}</Paragraph>
        </Col>
      </Row>
    </Container>

    <ImageAndContent {...props.imageAndContent} />

    <Container backgroundColor={theme.colors.layout.background.default}>
      <Row padding={[50]}>
        <Col xl={9} md={12}>
          <Heading type="h2" color="turquoise">
            {props.whatWeOffer.title}
          </Heading>
          <Paragraph as="div">{parse(props.whatWeOffer.content)}</Paragraph>
        </Col>
      </Row>
    </Container>

    <ApplyNow>
      <Container>
        <Row
          backgroundColor={theme.colors.secondary}
          borderRadius="10px"
          padding={[65, 50]}
          margin={[0, -125]}
        >
          <Col xl={4} md={12}>
            <Heading type="h2" color="white">
              {props.applyNow.firstCol.title}
              <span style={{ color: theme.colors.primary }}>.</span>
            </Heading>
            <WhiteSpace height={50} />
          </Col>

          <Col xl={6} md={12}>
            <Paragraph color="white" as="div">
              {parse(props.applyNow.secondCol.content)}
            </Paragraph>
            <ButtonRow>
              <Button color="turquoise" href="#">
                ik wil soliciteren!
              </Button>
            </ButtonRow>
          </Col>
        </Row>
      </Container>
    </ApplyNow>

    <AboveFooter {...props.aboveFooter} />

    <Footer {...props.options.acf.footer} />
  </>
);

export default Template;
