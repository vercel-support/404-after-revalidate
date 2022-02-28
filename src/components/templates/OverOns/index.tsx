import { FC } from "react";
import Head from "next/head";
import { Col, Container, Row } from "@piksl/grid";
import Box from "@piksl/box";
import parse from "html-react-parser";

import theme from "lib/theme";
import { PageType as WordPressPageType } from "lib/wp/types";
import { PageType } from "types";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";
import WhiteSpace from "components/elements/WhiteSpace";
import Button, {
  PropsType as ButtonPropsType,
} from "components/elements/Button";
import Link from "components/elements/Link";

import FeaturedBlock from "components/blocks/FeaturedBlock";

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

import { FeaturedSection, LinkContainer } from "./styles";

export type PropsType = PageType & {
  header: HeaderPropsType;
  ourMission: {
    firstCol: {
      title: string;
      content?: string;
    };
    secondCol: {
      content: string;
    };
  };
  imageAndContent: ImageAndContentPropsType;
  weHelp: {
    firstCol: {
      title: string;
      content: string;
    };
    secondCol: {
      title: string;
      subtitle: string;
      content: string;
      button: { title: string } & ButtonPropsType;
    };
    thirdCol: {
      title: string;
      subtitle: string;
      content: string;
      button: { title: string } & ButtonPropsType;
    };
  };
  featuredPages: Array<WordPressPageType>;
  purchaseConditions: {
    firstCol: {
      title: string;
      content: string;
    };
    secondCol: {
      documents:
        | Array<{
            document: {
              title: string;
              url: string;
            };
          }>
        | false;
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

    <Header {...props.header} />

    <Container backgroundColor={theme.colors.layout.background.contrast}>
      <Row padding={[50, 50]}>
        <Col xl={4} md={12}>
          <Heading type="h2" color="turquoise">
            {props.ourMission.firstCol.title}
            <span
              style={{
                color: theme.colors.secondary,
              }}
            >
              .
            </span>
          </Heading>
          {props.ourMission.firstCol.content && (
            <Paragraph>{props.ourMission.firstCol.content}</Paragraph>
          )}
        </Col>
        <Col xl={6} md={12}>
          <Paragraph>{props.ourMission.secondCol.content}</Paragraph>
        </Col>
      </Row>
    </Container>

    <ImageAndContent {...props.imageAndContent} />

    <Container backgroundColor={theme.colors.layout.background.default}>
      <Row padding={[50]} margin={[0, -70]}>
        <Col xl={4} md={12}>
          <Box display="block" padding={[0, 0, 50]}>
            <Heading type="h2">
              {props.weHelp.firstCol.title}
              <span
                style={{
                  color: theme.colors.secondary,
                }}
              >
                .
              </span>
            </Heading>
            <Paragraph color="black">{props.weHelp.firstCol.content}</Paragraph>
          </Box>
        </Col>

        <Col xl={4} md={12}>
          <Box
            height="100%"
            direction="column"
            justify="space-between"
            padding={[0, 0, 50]}
          >
            <div>
              <Heading type="h4" color="black">
                {props.weHelp.secondCol.title}
              </Heading>
              <WhiteSpace height={5} />
              <Heading type="h6" color="turquoise">
                {props.weHelp.secondCol.subtitle}
              </Heading>
              <Paragraph as="span">
                {parse(props.weHelp.secondCol.content)}
              </Paragraph>
            </div>
            <Button {...props.weHelp.secondCol.button}>
              {props.weHelp.secondCol.button.title}
            </Button>
          </Box>
        </Col>

        <Col xl={4} md={12}>
          <Box
            height="100%"
            direction="column"
            justify="space-between"
            padding={[0, 0, 50]}
          >
            <div>
              <Heading type="h4" color="black">
                {props.weHelp.thirdCol.title}
              </Heading>
              <WhiteSpace height={5} />
              <Heading type="h6" color="turquoise">
                {props.weHelp.thirdCol.subtitle}
              </Heading>
              <Paragraph as="span">
                {parse(props.weHelp.thirdCol.content)}
              </Paragraph>
            </div>
            <Button {...props.weHelp.thirdCol.button}>
              {props.weHelp.thirdCol.button.title}
            </Button>
          </Box>
        </Col>
      </Row>
    </Container>

    <FeaturedSection>
      <Container background="linear-gradient(rgb(255, 255, 255) 70%, rgb(244, 244, 244) 30%);">
        <Row
          backgroundColor={theme.colors.secondary}
          borderRadius="10px"
          padding={[65, 75]}
        >
          <Col>
            <Heading type="h2" color="white">
              Maak kennis met de organisatie
              <span style={{ color: theme.colors.primary }}>.</span>
            </Heading>
            <WhiteSpace height={50} />
          </Col>
          {props.featuredPages.map((page) => (
            <Col xl={4} md={6} sm={12} key={page.id}>
              <FeaturedBlock
                title={page.acf.featuredInfo?.title || ""}
                subtitle={page.acf.featuredInfo?.subtitle || ""}
                content={page.acf.featuredInfo?.description || ""}
                link={{
                  href: page.link,
                  title: "Lees meer ...",
                }}
                background="green"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </FeaturedSection>

    <Container backgroundColor={theme.colors.layout.background.contrast}>
      <Row padding={[0, 50]} align="center">
        <Col xl={6} md={12}>
          <Heading type="h2" color="turquoise">
            {props.purchaseConditions.firstCol.title}
            <span style={{ color: theme.colors.secondary }}>.</span>
          </Heading>
          <Paragraph>{props.purchaseConditions.firstCol.content}</Paragraph>
        </Col>
        <Col xl={6} md={12}>
          <LinkContainer>
            <Heading type="h4">Downloads</Heading>
            {props.purchaseConditions.secondCol.documents &&
              props.purchaseConditions.secondCol.documents.map(
                ({ document }) => (
                  <Link
                    href={document.url}
                    color="green"
                    target="_blank"
                    key={document.url}
                  >
                    {document.title}
                  </Link>
                )
              )}
          </LinkContainer>
        </Col>
      </Row>
    </Container>

    <AboveFooter {...props.aboveFooter} />

    <Footer {...props.options.acf.footer} />
  </>
);

export default Template;
