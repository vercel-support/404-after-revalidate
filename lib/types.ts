export type OptionsType = {
  acf: {
    mainMenuitems: Array<{
      menuItem: {
        title: string;
        url: string;
      };
    }>;
  };
};

export type PageType = {
  options: OptionsType;
  acf: any;
};
