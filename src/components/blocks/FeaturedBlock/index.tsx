import { FC } from "react";
import Image from "next/image";
import parse from "html-react-parser";

import { getPathname } from "lib/helpers";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";
import Link from "components/elements/Link";

import { Wrapper, ImageWrapper } from "./styles";

export type PropsType = {
  imgSrc?: string;
  title: string;
  subtitle: string;
  content: string;
  link: {
    href: string;
    title: string;
  };
  background?: "white" | "turquoise" | "green";
};

const FeaturedBlock: FC<PropsType> = (props): JSX.Element => {
  enum TitleColors {
    white = "black",
    turquoise = "white",
    green = "white",
  }

  enum SubtitleColors {
    white = "turquoise",
    turquoise = "green",
    green = "turquoise",
  }

  enum ContentColors {
    white = "black",
    turquoise = "white",
    green = "white",
  }

  enum LinkColors {
    white = "turquoise",
    turquoise = "white",
    green = "turquoise",
  }

  return (
    <Wrapper>
      {props.imgSrc && (
        <ImageWrapper>
          <Image src={props.imgSrc} layout="fill" objectFit="cover" />
        </ImageWrapper>
      )}
      <Heading type="h4" color={TitleColors[props.background || "white"]}>
        {props.title}
      </Heading>
      <Heading type="h5" color={SubtitleColors[props.background || "white"]}>
        {props.subtitle}
      </Heading>
      <Paragraph color={ContentColors[props.background || "white"]} as="div">
        {parse(props.content)}
      </Paragraph>
      <Link
        href={getPathname(props.link.href)}
        color={LinkColors[props.background || "white"]}
      >
        {props.link.title}
      </Link>
    </Wrapper>
  );
};

export default FeaturedBlock;
