import { FC } from "react";
import Head from "next/head";
import { Col, Container, Row } from "@piksl/grid";

import { PageType } from "types";

import theme from "lib/theme";

import FeaturedBlock from "components/blocks/FeaturedBlock";

import Navbar from "components/modules/Navbar";
import Header, {
  PropsType as HeaderPropsType,
} from "components/modules/Header";
import AboveFooter, {
  PropsType as AboveFooterPropsType,
} from "components/modules/AboveFooter";
import Footer from "components/modules/Footer";

import { FeaturedBlockContainer } from "./styles";

export type PropsType = PageType & {
  header: HeaderPropsType;
  items: Array<any>;
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

    <FeaturedBlockContainer>
      <Container backgroundColor={theme.colors.layout.background.default}>
        <Row padding={[50, 50]}>
          {props.items.map((item) => (
            <Col xl={4} lg={6} sm={12} key={item.link.href}>
              <FeaturedBlock
                imgSrc={item.imgSrc}
                title={item.title}
                subtitle={item.subtitle}
                content={item.content}
                link={{ href: item.link.href, title: item.link.title }}
                background="white"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </FeaturedBlockContainer>

    <AboveFooter {...props.aboveFooter} />

    <Footer {...props.options.acf.footer} />
  </>
);

export default Template;
