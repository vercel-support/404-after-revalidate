import { NextPage, GetStaticProps } from "next";

import { getACFOptions, getAgendaItems } from "lib/wp";

import Overzicht, { PropsType } from "components/templates/Overzicht";

const Page: NextPage<PropsType> = (props): JSX.Element => (
  <Overzicht {...props} />
);

export default Page;

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  const items = await getAgendaItems();

  const options = await getACFOptions();

  return {
    props: {
      head: {
        title: "Agenda overzicht - Oosterpoort",
        meta: [],
      },
      header: options.acf.agenda.header,
      items: items.map((item) => ({
        title: item.acf.title,
        subtitle: `${item.acf.fromDate} - ${item.acf.tillDate}`,
        content: item.acf.description,
        link: {
          href: `/agenda/${item.slug}`,
          title: "Lees meer ...",
        },
      })),
      aboveFooter: options.acf.agenda.aboveFooter,
      options,
    },
    // revalidate: 30,
  };
};
