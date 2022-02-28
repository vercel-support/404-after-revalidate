import { FC } from "react";
import Head from "next/head";
import { Col, Container, Row } from "@piksl/grid";
import dayjs from "dayjs";
require("dayjs/locale/nl");
import parse from "html-react-parser";

import theme from "lib/theme";
import { PageType as WordPressPageType } from "lib/wp/types";
import { NewsItemType, PageType } from "types";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";
import Toggle from "components/elements/Toggle";
import WhiteSpace from "components/elements/WhiteSpace";
import { PropsType as TogglePropsType } from "components/elements/Toggle";

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

import { FeaturedSection } from "./styles";

export type PropsType = PageType & {
  header: HeaderPropsType;
  whatWeDo: {
    firstCol: {
      title: string;
      content: string;
    };
    secondCol: {
      content: string;
    };
  };
  imageAndContent: ImageAndContentPropsType;
  faq: {
    firstCol: {
      title: string;
      content: string;
    };
    secondCol: {
      faq: Array<TogglePropsType>;
    };
  };
  featuredPages: Array<WordPressPageType>;
  news: {
    title: string;
    content: string;
    newsItems: Array<NewsItemType>;
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
            {props.whatWeDo.firstCol.title}
          </Heading>
          <Paragraph>{props.whatWeDo.firstCol.content}</Paragraph>
        </Col>
        <Col xl={8} md={12}>
          <Paragraph>{parse(props.whatWeDo.secondCol.content)}</Paragraph>
        </Col>
      </Row>
    </Container>

    <ImageAndContent {...props.imageAndContent} />

    <Container backgroundColor={theme.colors.layout.background.default}>
      <Row padding={[50, 0]}>
        <Col xl={4} md={12}>
          <Heading type="h2">
            {props.faq.firstCol.title}
            <span
              style={{
                color: theme.colors.secondary,
              }}
            >
              .
            </span>
          </Heading>
          <Paragraph>{props.faq.firstCol.content}</Paragraph>
        </Col>
        <Col xl={8} md={12}>
          {props.faq.secondCol.faq.map((item) => (
            <Toggle {...item} key={item.question} />
          ))}
        </Col>
      </Row>
    </Container>

    <FeaturedSection>
      <Container background="linear-gradient(rgb(255, 255, 255) 70%, rgb(244, 244, 244) 30%);">
        <Row
          backgroundColor={theme.colors.primary}
          borderRadius="10px"
          padding={[65, 75]}
        >
          <Col>
            <Heading type="h2" color="white">
              Ook hier kunnen we bij helpen
              <span style={{ color: theme.colors.secondary }}>.</span>
            </Heading>
            <WhiteSpace height={50} />
          </Col>
          {props.featuredPages.map((page) => (
            <Col xl={3} md={6} sm={12} key={page.id}>
              <FeaturedBlock
                title={page.acf.featuredInfo?.title || ""}
                subtitle={page.acf.featuredInfo?.subtitle || ""}
                content={page.acf.featuredInfo?.description || ""}
                link={{
                  href: page.link,
                  title: "Lees meer ...",
                }}
                background="turquoise"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </FeaturedSection>

    <Container backgroundColor={theme.colors.layout.background.contrast}>
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

    <AboveFooter {...props.aboveFooter} />

    <Footer {...props.options.acf.footer} />
  </>
);

export default Template;
