import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { getACFOptions, getStories, getStoryBySlug } from "lib/wp";

import NewsItem, { PropsType } from "components/templates/NewsItem";

const Page: NextPage<PropsType> = (props): JSX.Element => (
  <NewsItem {...props} />
);

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const stories = await getStories("?per_page=100");

  const paths = stories.map((story) => ({
    params: { slug: story.slug },
  }));

  return { paths, fallback: "blocking" };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PropsType> = async ({ params }) => {
  const { slug } = params as IParams;

  const story = await getStoryBySlug(slug);

  if (!story) return { notFound: true };

  const options = await getACFOptions();

  const head = { title: story.yoast_title, meta: story.yoast_meta };

  return {
    props: {
      ...story.acf,
      head,
      date: story.date,
      options,
    },
    // revalidate: 30,
  };
};
