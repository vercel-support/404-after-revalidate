import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Row } from "@piksl/grid";
require("dayjs/locale/nl");

import { PageType } from "types";

import Form, { PropsType as FormPropsType } from "components/elements/Form";

import Navbar from "components/modules/Navbar";
import Header from "components/modules/Header";
import Footer from "components/modules/Footer";

export type PropsType = PageType & {
  title: string;
  fromDate: string;
  tillDate: string;
  description: string;
  form: FormPropsType;
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
      background={{ image: "", position: "center" }}
      height="small"
      title={props.title}
      subtitle={`${props.fromDate} - ${props.tillDate}`}
      content={props.description}
      width={9}
    />

    <Container>
      <Row>
        <Form {...props.form} initialValues={{ 8: props.title }} />
      </Row>
    </Container>

    <Footer {...props.options.acf.footer} />
  </>
);

export default Template;
