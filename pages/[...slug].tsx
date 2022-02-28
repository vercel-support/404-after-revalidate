import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import {
  getACFOptions,
  getPages,
  getNewsItems,
  getPageBySlug,
  getPagesByParentId,
  getForm,
} from "lib/wp";
import { getPathname } from "lib/helpers";

import Contact, {
  PropsType as ContactPropsType,
} from "components/templates/Contact";

import OverOns, {
  PropsType as OverOnsPropsType,
} from "components/templates/OverOns";

import HulpBij, {
  PropsType as HulpBijPropsType,
} from "components/templates/HulpBij";

import Flexibel, {
  PropsType as FlexibelPropsType,
} from "components/templates/Flexibel";

import FormPage, {
  PropsType as FormPagePropsType,
} from "components/templates/FormPage";

type PropsType =
  | {
      template: "HulpBij" | "OverOns" | "Contact" | "Flexibel" | "FormPage";
    } & HulpBijPropsType &
      OverOnsPropsType &
      ContactPropsType &
      FlexibelPropsType &
      FormPagePropsType;

const templates = {
  HulpBij,
  OverOns,
  Contact,
  Flexibel,
  FormPage,
};

const Page: NextPage<PropsType> = (props): JSX.Element => {
  const Template = templates[props.template];

  return <Template {...props} />;
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getPages("?per_page=100");

  const paths = pages.map((page) => {
    // 'slice' and 'split' are used to transform '/a/b/' to ['a', 'b'].
    const slug = getPathname(page.link).slice(1, -1).split("/");

    return {
      params: { slug },
    };
  });

  return { paths, fallback: "blocking" };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PropsType> = async ({ params }) => {
  const { slug } = params as IParams;

  let page = await getPageBySlug(slug[0]);

  if (!page) return { notFound: true };

  if (slug.length > 1) {
    const pages = await getPagesByParentId(page.id);
    page = pages.find((page) => page.slug === slug[slug.length - 1])!;
  }

  const options = await getACFOptions();

  const head = { title: page.yoast_title, meta: page.yoast_meta };

  switch (page.template) {
    case "Contact.php": {
      const form = await getForm(1);

      return {
        props: { template: "Contact", head, ...page.acf, form, options },
        // revalidate: 30,
      };
    }

    case "OverOns.php": {
      const pages = await getPagesByParentId(page.id);

      return {
        props: {
          template: "OverOns",
          head,
          ...page.acf,
          featuredPages: pages.reverse(),
          options,
        },
        // revalidate: 30,
      };
    }

    case "HulpBij.php": {
      const newsItems = await getNewsItems("?per_page=2");

      let pages = await getPagesByParentId(page.parent);
      pages = pages.filter((p) => p.id !== page.id);

      return {
        props: {
          template: "HulpBij",
          head,
          ...page.acf,
          featuredPages: pages,
          news: { ...page.acf.news, newsItems },
          options,
        },
        // revalidate: 30,
      };
    }

    case "Flexibel.php": {
      return {
        props: { template: "Flexibel", head, ...page.acf, options },
        // revalidate: 30,
      };
    }

    case "FormPage.php": {
      const form = await getForm(page.acf.form.id);

      const props = { template: "FormPage", head, ...page.acf, form, options };

      return {
        props,
        // revalidate: 30,
      };
    }

    default:
      return { notFound: true };
  }
};
