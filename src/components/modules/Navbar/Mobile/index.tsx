import { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "@piksl/grid";
import { Bars, Times } from "@styled-icons/fa-solid";

import theme from "lib/theme";

import MenuItem from "./MenuItem";
import {
  Placeholder,
  Wrapper,
  LogoWrapper,
  MenuButton,
  Overlay,
  MenuItemContainer,
} from "./styles";

import { PropsType } from "../";

const DesktopNavbar: FC<PropsType> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Set document.body.style to max-height: 100vh and overflowY: hidden,
  // when the mobile menu is open.
  useEffect(() => {
    isOpen
      ? ((document.body.style.maxHeight = "100vh"),
        (document.body.style.overflowY = "hidden"))
      : ((document.body.style.maxHeight = ""),
        (document.body.style.overflowY = ""));
  }, [isOpen]);

  return (
    <>
      <Placeholder />
      <Wrapper>
        <Container>
          <Row>
            <Col md={6}>
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
            <Col md={6}>
              <MenuButton onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <Times color={theme.colors.primary} size={30} />
                ) : (
                  <Bars color={theme.colors.primary} size={30} />
                )}
              </MenuButton>
            </Col>
          </Row>

          {isOpen && (
            <Overlay>
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
                {props.topMenuItems.map(({ menuItem }) => (
                  <MenuItem
                    title={menuItem.title}
                    url={menuItem.url}
                    submenu={false}
                    key={menuItem.title}
                  />
                ))}
              </MenuItemContainer>
            </Overlay>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default DesktopNavbar;
