import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "@piksl/grid";

import MenuItem from "./MenuItem";
import {
  Placeholder,
  Wrapper,
  LogoWrapper,
  TopBar,
  MenuItemContainer,
} from "./styles";

import { PropsType } from "../";

const DesktopNavbar: FC<PropsType> = (props): JSX.Element => (
  <>
    <Placeholder />
    <Wrapper>
      <Container>
        <Row>
          <Col xl={2}>
            <LogoWrapper>
              <Link href="/">
                <a>
                  <Image
                    src="/images/svg/logo_oosterpoort.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    quality={100}
                    alt="Logo Oosterpoort"
                  />
                </a>
              </Link>
            </LogoWrapper>
          </Col>
          <Col xl={10}>
            <TopBar>
              {props.topMenuItems.map(({ menuItem }) => (
                <MenuItem
                  title={menuItem.title}
                  url={menuItem.url}
                  submenu={false}
                  key={menuItem.title}
                />
              ))}
            </TopBar>
            <MenuItemContainer>
              {props.mainMenuitems.map((menuItem) => (
                <MenuItem
                  title={menuItem.menuItem.title}
                  url={menuItem.menuItem.url}
                  button={menuItem.button}
                  submenu={menuItem.submenu}
                  key={menuItem.menuItem.title}
                />
              ))}
            </MenuItemContainer>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  </>
);

export default DesktopNavbar;
