import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Row } from "@piksl/grid";
require("dayjs/locale/nl");

import { PageType } from "types";

import Form, { PropsType as FormPropsType } from "components/elements/Form";

import Navbar from "components/modules/Navbar";
import Header, {
  PropsType as HeaderPropsType,
} from "components/modules/Header";
import Footer from "components/modules/Footer";

export type PropsType = PageType & {
  header: HeaderPropsType;
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
      {...props.header}
      height="small"
      title={props.form.title}
      background={{ image: "", position: "center" }}
    />

    <Container>
      <Row>
        <Form {...props.form} hideFormTitle />
      </Row>
    </Container>

    <Footer {...props.options.acf.footer} />
  </>
);

export default Template;
