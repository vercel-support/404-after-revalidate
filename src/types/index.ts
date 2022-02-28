import { PropsType as HeaderPropsType } from "components/modules/Header";
import { PropsType as AboveFooterPropsType } from "components/modules/AboveFooter";
import { PageType as WordPressPageType } from "lib/wp/types";

export type AgendaItemType = {
  id: number;
  slug: string;
  acf: {
    title: string;
    fromDate: string;
    tillDate: string;
    description: string;
  };
};

export type NewsItemType = {
  id: number;
  date: string;
  slug: string;
  acf: {
    title: string;
    description: string;
    content: string;
    imgSrc: string;
  };
};

export type VacancyType = {
  id: number;
  slug: string;
  acf: {
    vacancy: {
      title: string;
      region: string;
      hoursPerWeek: string;
      education: string;
    };
  };
};

export type InputType = {
  value: string;
  feedbackStatus: null | "success" | "error";
  feedbackText: string;
};

export type FooterType = {
  firstCol: {
    title: string;
    content: string;
  };
  secondCol: {
    title: string;
    links: Array<{
      link: {
        title: string;
        url: string;
        target: string;
      };
    }>;
  };
  thirdCol: {
    title: string;
    content: string;
  };
  fourthCol: {
    title: string;
    images: Array<{
      image: string;
    }>;
  };
};

export type MenuItemType = {
  title: string;
  url: string;
};

export type ACFOptionsType = {
  acf: {
    stories: {
      header: HeaderPropsType;
      aboveFooter: AboveFooterPropsType;
    };
    news: {
      header: HeaderPropsType;
      aboveFooter: AboveFooterPropsType;
    };
    agenda: {
      header: HeaderPropsType;
      aboveFooter: AboveFooterPropsType;
    };
    vacancies: {
      header: HeaderPropsType;
      aboveFooter: AboveFooterPropsType;
    };
    footer: FooterType;
    topMenuItems: Array<{ menuItem: MenuItemType }>;
    mainMenuitems: Array<{
      menuItem: MenuItemType;
      button: "turquoise" | "green" | false;
      submenu: Array<{ menuItem: MenuItemType }>;
    }>;
  };
};

export type PageType = {
  head: {
    title: string;
    meta: WordPressPageType["yoast_meta"];
  };
  options: ACFOptionsType;
};

export type StoryType = {
  id: number;
  date: string;
  slug: string;
  acf: {
    title: string;
    description: string;
    content: string;
    imgSrc: string;
  };
};
