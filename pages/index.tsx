import { NextPage, GetStaticProps } from "next";

import {
  getACFOptions,
  getNewsItems,
  getAgendaItems,
  getPageBySlug,
} from "lib/wp";

import Home, { PropsType as HomePropsType } from "components/templates/Home";

const Page: NextPage<HomePropsType> = (props): JSX.Element => (
  <Home {...props} />
);

export default Page;

export const getStaticProps: GetStaticProps<HomePropsType> = async () => {
  const page = await getPageBySlug("home");

  const options = await getACFOptions();

  const head = { title: page.yoast_title, meta: page.yoast_meta };

  const newsItems = await getNewsItems("?per_page=2");
  const agendaItems = await getAgendaItems("?per_page=2");

  return {
    props: {
      template: "Home",
      head,
      ...page.acf,
      news: { ...page.acf.news, newsItems },
      agenda: { ...page.acf.agenda, agendaItems },
      options,
    },
    // revalidate: 30,
  };
};
