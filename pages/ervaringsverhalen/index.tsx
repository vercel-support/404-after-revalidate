import { NextPage, GetStaticProps } from "next";
import dayjs from "dayjs";
require("dayjs/locale/nl");

import { getACFOptions, getStories } from "lib/wp";

import Overzicht, { PropsType } from "components/templates/Overzicht";

const Page: NextPage<PropsType> = (props): JSX.Element => (
  <Overzicht {...props} />
);

export default Page;

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  const items = await getStories();

  const options = await getACFOptions();

  return {
    props: {
      head: {
        title: "Ervaringsverhalen - Oosterpoort",
        meta: [],
      },
      header: options.acf.stories.header,
      items: items.map((item) => ({
        imgSrc: item.acf.imgSrc,
        title: item.acf.title,
        subtitle: dayjs(item.date).locale("nl").format("D MMMM YYYY"),
        content: item.acf.description,
        link: {
          href: `/ervaringsverhalen/${item.slug}`,
          title: "Lees meer ...",
        },
      })),
      aboveFooter: options.acf.stories.aboveFooter,
      options,
    },
    // revalidate: 30,
  };
};
