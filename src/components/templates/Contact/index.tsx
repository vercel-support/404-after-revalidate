import { FC } from "react";
import Head from "next/head";
import { Container, Row, Col } from "@piksl/grid";
import parse from "html-react-parser";

import { PageType } from "types";
import { FormType } from "lib/wp/types";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";
import Form, { PropsType as FormPropsType } from "components/elements/Form";

import Navbar from "components/modules/Navbar";
import Header, {
  PropsType as HeaderPropsType,
} from "components/modules/Header";
import Footer from "components/modules/Footer";

import { ContactFormWrapper } from "./styles";

export type PropsType = PageType & {
  header: HeaderPropsType;
  form: FormType;
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

    <ContactFormWrapper>
      <Container>
        <Row padding={[50, 50]}>
          <Col xl={5} lg={6} md={12}>
            <Heading type="h1" as="h2">
              Contactgegevens
            </Heading>
            <Paragraph>
              {parse(props.options.acf.footer.thirdCol.content)}
            </Paragraph>
          </Col>

          <Col xl={6} lg={6} md={12}>
            <Form {...props.form} />
          </Col>
        </Row>
      </Container>
    </ContactFormWrapper>

    <iframe
      width="100%"
      height="475"
      src="https://maps.google.com/maps?q=Kamperfoeliestraat%2060%205342%20CX%20OSS&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameBorder="0"
      scrolling="no"
      style={{ marginBottom: "-10px" }}
    />

    <Footer {...props.options.acf.footer} />
  </>
);
export default Template;
