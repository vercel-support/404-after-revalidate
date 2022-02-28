import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "@piksl/grid";
import parse from "html-react-parser";

import { ACFOptionsType } from "types";

import theme from "lib/theme";
import { getPathname } from "lib/helpers";

import Heading from "components/elements/Heading";
import Paragraph from "components/elements/Paragraph";

import {
  Wrapper,
  SocialIconsContainer,
  QualityMarkContainer,
  QualityMarkWrapper,
  Socket,
} from "./styles";

export type PropsType = ACFOptionsType["acf"]["footer"];

const Footer: FC<PropsType> = (props): JSX.Element => (
  <>
    <Wrapper>
      <Container backgroundColor={theme.colors.primary}>
        <Row>
          <Col xl={4} md={6} sm={12}>
            <Heading type="h4" color="white">
              {props.firstCol.title}
            </Heading>
            <Paragraph color="white">{props.firstCol.content}</Paragraph>
          </Col>
          <Col xl={2} md={6} sm={12}>
            <Heading type="h4" color="white">
              {props.secondCol.title}
            </Heading>
            <Paragraph color="white">
              {props.secondCol.links.map(({ link }) => (
                <React.Fragment key={link.url}>
                  <Link href={getPathname(link.url)}>
                    <a>{link.title}</a>
                  </Link>
                  <br />
                </React.Fragment>
              ))}
            </Paragraph>
          </Col>
          <Col xl={3} md={6} sm={12}>
            <Heading type="h4" color="white">
              {props.thirdCol.title}
            </Heading>
            <Paragraph color="white">{parse(props.thirdCol.content)}</Paragraph>
            <SocialIconsContainer>
              <a
                href="https://www.facebook.com/OosterpoortJeugdEnOpvoedhulp"
                target="_blank"
              >
                <Image
                  src="/images/svg/facebook.svg"
                  layout="fixed"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/stichting-oosterpoort-jeugdhulp/"
                target="_blank"
              >
                <Image
                  src="/images/svg/linkedin.svg"
                  layout="fixed"
                  width={30}
                  height={30}
                />
              </a>
              <a
                href="https://www.instagram.com/jeugdzorgoosterpoort/"
                target="_blank"
              >
                <Image
                  src="/images/svg/instagram.svg"
                  layout="fixed"
                  width={30}
                  height={30}
                />
              </a>
            </SocialIconsContainer>
          </Col>
          <Col xl={3} md={6} sm={12}>
            <Heading type="h4" color="white">
              {props.fourthCol.title}
            </Heading>
            <QualityMarkContainer>
              {props.fourthCol.images.map(({ image }) => (
                <QualityMarkWrapper key={image}>
                  <Image src={image} layout="fill" objectFit="contain" />
                </QualityMarkWrapper>
              ))}
            </QualityMarkContainer>
          </Col>
        </Row>
      </Container>
    </Wrapper>

    <Socket>
      <Container backgroundColor="#006856">
        <Row padding={[0, 0]}>
          <Col>
            <Paragraph color="white">
              © {new Date().getFullYear()} - Oosterpoort
              {/* Ontwerp{" "}
              <strong>
                <a href="https://huyswerk.nl/" target="_blank">
                  huyswerk.nl
                </a>
              </strong>
              , ontwikkeling{" "}
              <strong>
                <a href="https://www.piksl.nl/" target="_blank">
                  PIKSL
                </a>
              </strong> */}
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </Socket>
  </>
);

export default Footer;
