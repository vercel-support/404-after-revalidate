import { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import { getPathname } from "../lib/helpers";
import { getOptions } from "../lib/requests";

type PropsType = {
  menuItems: Array<{
    menuItem: {
      title: string;
      url: string;
    };
  }>;
};

const Page: NextPage<PropsType> = (props): JSX.Element => {
  return (
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
        Template: Home
      </div>
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PropsType> = async () => {
  const options = await getOptions();

  return {
    props: {
      menuItems: options.acf.mainMenuitems,
    },
    revalidate: 30,
  };
};
