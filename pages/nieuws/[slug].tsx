import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { getACFOptions, getNewsItems, getNewsItemBySlug } from "lib/wp";

import NewsItem, { PropsType } from "components/templates/NewsItem";

const Page: NextPage<PropsType> = (props): JSX.Element => (
  <NewsItem {...props} />
);

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const newsItems = await getNewsItems("?per_page=100");

  const paths = newsItems.map((newsItem) => ({
    params: { slug: newsItem.slug },
  }));

  return { paths, fallback: "blocking" };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PropsType> = async ({ params }) => {
  const { slug } = params as IParams;

  const newsItem = await getNewsItemBySlug(slug);

  if (!newsItem) return { notFound: true };

  const options = await getACFOptions();

  const head = { title: newsItem.yoast_title, meta: newsItem.yoast_meta };

  return {
    props: {
      ...newsItem.acf,
      head,
      date: newsItem.date,
      options,
    },
    // revalidate: 30,
  };
};
