import { FC } from "react";

import { ACFOptionsType } from "types";

import DesktopNavbar from "./Desktop";
import MobileNavbar from "./Mobile";

export type PropsType = {
  topMenuItems: ACFOptionsType["acf"]["topMenuItems"];
  mainMenuitems: ACFOptionsType["acf"]["mainMenuitems"];
};

const Navbar: FC<PropsType> = (props): JSX.Element => (
  <>
    <DesktopNavbar {...props} />
    <MobileNavbar {...props} />
  </>
);

export default Navbar;
