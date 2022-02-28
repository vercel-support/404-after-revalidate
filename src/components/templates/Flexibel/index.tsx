import { FC } from "react";
import Head from "next/head";

import { PageType } from "types";

import Navbar from "components/modules/Navbar";
import Header, {
  PropsType as HeaderPropsType,
} from "components/modules/Header";
import ImageAndContent, {
  PropsType as ImageAndContentPropsType,
} from "components/modules/ImageAndContent";
import TwoColumns_33_50, {
  PropsType as TwoColumns_33_50PropsType,
} from "components/modules/TwoColumns_33_50";
import ContentAndMedia, {
  PropsType as ContentAndMediaPropsType,
} from "components/modules/ContentAndMedia";
import OneColumn_75, {
  PropsType as OneColumn_75PropsType,
} from "components/modules/OneColumn_75";
import FeaturedSection, {
  PropsType as FeaturedSectionPropsType,
} from "components/modules/FeaturedSection";
import AboveFooter, {
  PropsType as AboveFooterPropsType,
} from "components/modules/AboveFooter";
import Footer from "components/modules/Footer";

export type PropsType = PageType & {
  content: Array<
    | { acf_fc_layout: "header"; props: HeaderPropsType }
    | { acf_fc_layout: "imageAndContent"; props: ImageAndContentPropsType }
    | { acf_fc_layout: "twoColumns_33_50"; props: TwoColumns_33_50PropsType }
    | { acf_fc_layout: "contentAndMedia"; props: ContentAndMediaPropsType }
    | { acf_fc_layout: "oneColumn_75"; props: OneColumn_75PropsType }
    | { acf_fc_layout: "featuredSection"; props: FeaturedSectionPropsType }
    | { acf_fc_layout: "aboveFooter"; props: AboveFooterPropsType }
  >;
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

    {props.content.map((layout, index) => {
      switch (layout.acf_fc_layout) {
        case "header":
          return (
            <Header
              {...layout.props}
              key={`${layout.acf_fc_layout}-${index}`}
            />
          );
        case "imageAndContent":
          return (
            <ImageAndContent
              {...layout.props}
              key={`${layout.acf_fc_layout}-${index}`}
            />
          );
        case "aboveFooter":
          return (
            <AboveFooter
              {...layout.props}
              key={`${layout.acf_fc_layout}-${index}`}
            />
          );
        case "twoColumns_33_50":
          return (
            <TwoColumns_33_50
              {...layout.props}
              key={`${layout.acf_fc_layout}-${index}`}
            />
          );
        case "contentAndMedia":
          return (
            <ContentAndMedia
              {...layout.props}
              key={`${layout.acf_fc_layout}-${index}`}
            />
          );
        case "oneColumn_75":
          return (
            <OneColumn_75
              {...layout.props}
              key={`${layout.acf_fc_layout}-${index}`}
            />
          );
        case "featuredSection":
          return (
            <FeaturedSection
              {...layout.props}
              key={`${layout.acf_fc_layout}-${index}`}
            />
          );
        default:
          return null;
      }
    })}

    <Footer {...props.options.acf.footer} />
  </>
);

export default Template;
