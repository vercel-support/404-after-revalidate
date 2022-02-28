import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { getACFOptions, getVacancies, getVacancyBySlug } from "lib/wp";

import Vacature, { PropsType } from "components/templates/Vacature";

const Page: NextPage<PropsType> = (props): JSX.Element => (
  <Vacature {...props} />
);

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const vacancies = await getVacancies("?per_page=100");

  const paths = vacancies.map((vacancy) => ({
    params: { slug: vacancy.slug },
  }));

  return { paths, fallback: "blocking" };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PropsType> = async ({ params }) => {
  const { slug } = params as IParams;

  const vacancy = await getVacancyBySlug(slug);

  if (!vacancy) return { notFound: true };

  const options = await getACFOptions();

  const head = { title: vacancy.yoast_title, meta: vacancy.yoast_meta };

  return {
    props: {
      ...vacancy.acf,
      head,
      options,
    },
    // revalidate: 30,
  };
};
