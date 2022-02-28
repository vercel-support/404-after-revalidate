import { FC, useState } from "react";
import Link from "next/link";
import { ChevronUp, ChevronDown } from "@styled-icons/fa-solid";

import theme from "lib/theme";
import { getPathname } from "lib/helpers";
import { MenuItemType } from "types";

import Button, {
  PropsType as ButtonPropsType,
} from "components/elements/Button";

import { StyledMenuItem, DropdownContainer } from "./styles";

export type PropsType = MenuItemType & {
  button?: ButtonPropsType["color"] | false;
  submenu?: Array<{ menuItem: MenuItemType }> | false;
};

const MenuItem: FC<PropsType> = (props): JSX.Element => {
  const [dropdownIsVisible, setDropdownVisibility] = useState<boolean>(false);
  const href = getPathname(props.url);

  if (!props.button && !props.submenu) {
    return (
      <StyledMenuItem>
        <Link href={href}>
          <a>{props.title}</a>
        </Link>
      </StyledMenuItem>
    );
  }

  if (!!props.button)
    return (
      <StyledMenuItem>
        <Button href={href} color={props.button}>
          {props.title}
        </Button>
      </StyledMenuItem>
    );

  return (
    <>
      <StyledMenuItem>
        <Link href={href}>
          <a>{props.title}</a>
        </Link>
        {dropdownIsVisible ? (
          <ChevronUp
            color={theme.colors.primary}
            size={30}
            onClick={() => setDropdownVisibility(false)}
          />
        ) : (
          <ChevronDown
            color={theme.colors.primary}
            size={30}
            onClick={() => setDropdownVisibility(true)}
          />
        )}
      </StyledMenuItem>
      {!!props.submenu && (
        <DropdownContainer isVisible={dropdownIsVisible}>
          {props.submenu.map(({ menuItem }) => (
            <StyledMenuItem key={menuItem.title}>
              <Link href={getPathname(menuItem.url)}>
                <a>{menuItem.title}</a>
              </Link>
            </StyledMenuItem>
          ))}
        </DropdownContainer>
      )}
    </>
  );
};

export default MenuItem;
