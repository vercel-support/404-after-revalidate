import { NextPage, GetStaticProps } from "next";

import { getACFOptions, getVacancies } from "lib/wp";

import Overzicht, { PropsType } from "components/templates/Overzicht";

const Page: NextPage<PropsType> = (props): JSX.Element => (
  <Overzicht {...props} />
);

export default Page;

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  const vacancies = await getVacancies("?per_page=100");

  const options = await getACFOptions();

  return {
    props: {
      head: {
        title: "Werken bij - Oosterpoort",
        meta: [],
      },
      header: options.acf.vacancies.header,
      items: vacancies.map((item) => ({
        title: item.acf.vacancy.title,
        subtitle: item.acf.vacancy.region,
        content: `Vereiste opleiding: ${item.acf.vacancy.education}
        <br/>
        ${item.acf.vacancy.hoursPerWeek}`,
        link: {
          href: `/vacatures/${item.slug}`,
          title: "Lees meer ...",
        },
      })),
      aboveFooter: options.acf.vacancies.aboveFooter,
      options,
    },
    // revalidate: 30,
  };
};
