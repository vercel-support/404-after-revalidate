import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import {
  getACFOptions,
  getAgendaItems,
  getAgendaItemBySlug,
  getForm,
} from "lib/wp";

import AgendaItem, { PropsType } from "components/templates/AgendaItem";

const Page: NextPage<PropsType> = (props): JSX.Element => (
  <AgendaItem {...props} />
);

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const agendaItems = await getAgendaItems("?per_page=100");

  const paths = agendaItems.map((agendaItem) => ({
    params: { slug: agendaItem.slug },
  }));

  return { paths, fallback: "blocking" };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PropsType> = async ({ params }) => {
  const { slug } = params as IParams;

  const agendaItem = await getAgendaItemBySlug(slug);

  if (!agendaItem) return { notFound: true };

  const options = await getACFOptions();

  const head = { title: agendaItem.yoast_title, meta: agendaItem.yoast_meta };

  const form = await getForm(3);

  return {
    props: {
      ...agendaItem.acf,
      head,
      form,
      options,
    },
    // revalidate: 30,
  };
};
