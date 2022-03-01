import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

import {
  getOptions,
  getPages,
  getPageBySlug,
  getPagesByParentId,
} from "../lib/requests";
import { getPathname } from "../lib/helpers";

type PropsType = {
  template: "HulpBij" | "OverOns" | "Contact" | "Flexibel" | "FormPage";
  menuItems: Array<{
    menuItem: {
      title: string;
      url: string;
    };
  }>;
};

const Page: NextPage<PropsType> = (props): JSX.Element => (
  <>
    <div
      style={{
        maxWidth: "1100px",
        display: "flex",
        justifyContent: "space-evenly",
        margin: "auto",
      }}
    >
      {props.menuItems.map(({ menuItem }) => (
        <Link href={getPathname(menuItem.url)}>{menuItem.title}</Link>
      ))}
    </div>
    <div
      style={{
        maxWidth: "1100px",
        display: "flex",
        justifyContent: "center",
        margin: "50px auto",
      }}
    >
      Template: {props.template}
    </div>
  </>
);

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getPages("?per_page=100");

  const paths = pages.map((page: any) => {
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
    page = pages.find((page: any) => page.slug === slug[slug.length - 1])!;
  }

  const options = await getOptions();

  switch (page.template) {
    case "Contact.php": {
      return {
        props: { template: "Contact", menuItems: options.acf.mainMenuitems },
        revalidate: 30,
      };
    }

    case "OverOns.php": {
      return {
        props: { template: "OverOns", menuItems: options.acf.mainMenuitems },
        revalidate: 30,
      };
    }

    case "HulpBij.php": {
      return {
        props: {
          template: "HulpBij",
          menuItems: options.acf.mainMenuitems,
        },
        revalidate: 30,
      };
    }

    case "Flexibel.php": {
      return {
        props: { template: "Flexibel", menuItems: options.acf.mainMenuitems },
        revalidate: 30,
      };
    }

    case "FormPage.php": {
      return {
        props: { template: "FormPage", menuItems: options.acf.mainMenuitems },
        revalidate: 30,
      };
    }

    default:
      return { notFound: true };
  }
};
