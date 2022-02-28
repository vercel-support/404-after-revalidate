import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "@piksl/grid";
import dayjs from "dayjs";
require("dayjs/locale/nl");

import theme from "lib/theme";
import { AgendaItemType, NewsItemType, PageType } from "types";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";
import Button, {
  PropsType as ButtonPropsType,
} from "components/elements/Button";

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

import { HeaderWrapper, FeaturedSection } from "./styles";

export type PropsType = PageType & {
  header: HeaderPropsType;
  featuredSection: {
    title: string;
    subtitle: string;
    pages: Array<{
      title: string;
      subtitle: string;
      content: string;
      href: string;
    }>;
  };
  workArea: {
    title: string;
    content: string;
    button: ButtonPropsType & { title: string };
  };
  news: {
    title: string;
    content: string;
    newsItems: Array<NewsItemType>;
  };
  imageAndContent: ImageAndContentPropsType;
  agenda: {
    title: string;
    content: string;
    agendaItems: Array<AgendaItemType>;
  };
  aboveFooter: AboveFooterPropsType;
};

const Template: FC<PropsType> = (props): JSX.Element => {
  return (
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

      <HeaderWrapper>
        <Header {...props.header} />
      </HeaderWrapper>

      <FeaturedSection>
        <Container backgroundColor={theme.colors.layout.background.contrast}>
          <Row
            backgroundColor={theme.colors.primary}
            borderRadius="10px"
            margin={[-250]}
            padding={[50, 50]}
          >
            <Col xl={4} md={6} xs={12}>
              <Heading type="h2" color="white">
                {props.featuredSection.title}
                <span style={{ color: theme.colors.secondary }}>.</span>
              </Heading>
              <Paragraph color="white">
                {props.featuredSection.subtitle}
              </Paragraph>
            </Col>
            {props.featuredSection.pages.map((page) => (
              <Col xl={4} md={6} xs={12} key={page.title}>
                <FeaturedBlock
                  title={page.title}
                  subtitle={page.subtitle}
                  content={page.content}
                  link={{ href: page.href, title: "Lees meer ..." }}
                  background="turquoise"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </FeaturedSection>

      <Container backgroundColor={theme.colors.layout.background.contrast}>
        <Row padding={[0, 50]}>
          <Col xl={6} sm={12}>
            <Heading type="h2">
              {props.workArea.title}
              <span style={{ color: theme.colors.secondary }}>.</span>
            </Heading>
            <Paragraph>{props.workArea.content}</Paragraph>
            {/* <Button {...props.workArea.button}>
              {props.workArea.button.title}
            </Button> */}
          </Col>
          <Col xl={6} sm={12}>
            <div
              style={{ position: "relative", width: "100%", height: "150%" }}
            >
              <Image
                src="/images/werkgebied.png"
                layout="fill"
                objectFit="contain"
                objectPosition="right"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container backgroundColor={theme.colors.layout.background.default}>
        <Row padding={[50, 50]}>
          <Col xl={4} md={12}>
            <Heading type="h2" color="turquoise">
              {props.news.title}
              <span style={{ color: theme.colors.secondary }}>.</span>
            </Heading>
            <Paragraph>{props.news.content}</Paragraph>
          </Col>
          {props.news.newsItems.map((item) => (
            <Col xl={4} md={6} sm={12} key={item.slug}>
              <FeaturedBlock
                imgSrc={item.acf.imgSrc}
                title={item.acf.title}
                subtitle={dayjs(item.date).locale("nl").format("D MMMM YYYY")}
                content={item.acf.description}
                link={{
                  href: `/nieuws/${item.slug}`,
                  title: "Lees meer ...",
                }}
                background="white"
              />
            </Col>
          ))}
        </Row>
      </Container>

      <ImageAndContent {...props.imageAndContent} />

      <Container backgroundColor={theme.colors.layout.background.default}>
        <Row padding={[50, 50]}>
          <Col xl={4} md={12}>
            <Heading type="h2" color="turquoise">
              {props.agenda.title}
              <span style={{ color: theme.colors.secondary }}>.</span>
            </Heading>
            <Paragraph>{props.agenda.content}</Paragraph>
          </Col>
          {props.agenda.agendaItems.map((item) => (
            <Col xl={4} md={6} sm={12} key={item.slug}>
              <FeaturedBlock
                title={item.acf.title}
                subtitle={`${item.acf.fromDate} - ${item.acf.tillDate}`}
                content={item.acf.description}
                link={{
                  href: `/agenda/${item.slug}`,
                  title: "Lees meer ...",
                }}
                background="white"
              />
            </Col>
          ))}
        </Row>
      </Container>

      <AboveFooter {...props.aboveFooter} />

      <Footer {...props.options.acf.footer} />
    </>
  );
};

export default Template;
