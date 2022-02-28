import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Col, Container, Row } from "@piksl/grid";
import Box from "@piksl/box";
import parse from "html-react-parser";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import dayjs from "dayjs";
require("dayjs/locale/nl");

import theme from "lib/theme";
import { PageType } from "types";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";

import Navbar from "components/modules/Navbar";
import Header from "components/modules/Header";
import Footer from "components/modules/Footer";

export type PropsType = PageType & {
  imgSrc: string;
  date: string;
  title: string;
  description: string;
  content: string;
};

const Template: FC<PropsType> = (props): JSX.Element => {
  const router = useRouter();
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}${router.asPath}`
      : "";

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

      <Header
        color="turquoise"
        background={{ image: props.imgSrc, position: "center" }}
        height="small"
        title={props.title}
        width={9}
        content={props.description}
      />

      <Container backgroundColor={theme.colors.layout.background.default}>
        <Row padding={[50, 25]} justify="center">
          <Col xl={8} md={12}>
            <Heading type="h4">
              {dayjs(props.date).locale("nl").format("D MMMM YYYY")}
            </Heading>
            <Paragraph as="div">{parse(props.content)}</Paragraph>
          </Col>
        </Row>

        <Row justify="center">
          <Col xl={8} md={12}>
            <Heading type="h5">
              Deel dit artikel via één van onderstaande kanalen.
            </Heading>
            <Box width="100%" margin={[15, 0, 0]}>
              <EmailShareButton url={url}>
                <EmailIcon
                  round
                  size={40}
                  bgStyle={{ fill: theme.colors.primary }}
                />
              </EmailShareButton>

              <FacebookShareButton url={url}>
                <FacebookIcon round size={40} />
              </FacebookShareButton>

              <LinkedinShareButton url={url}>
                <LinkedinIcon round size={40} />
              </LinkedinShareButton>

              <WhatsappShareButton url={url}>
                <WhatsappIcon round size={40} />
              </WhatsappShareButton>
            </Box>
          </Col>
        </Row>
      </Container>

      <Footer {...props.options.acf.footer} />
    </>
  );
};

export default Template;
