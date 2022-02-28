import { PropsType as FormFieldPropsType } from "components/elements/Form/Field";

export type PageType = {
  id: number;
  title: { rendered: string };
  slug: string;
  link: string;
  template:
    | "Contact.php"
    | "Flexibel.php"
    | "Home.php"
    | "OverOns.php"
    | "HulpBij.php"
    | "FormPage.php";
  parent: number;
  acf: any;
  yoast_title: string;
  yoast_meta: Array<{ name?: string; property?: string; content: string }>;
};

export type MediaType = {
  id: number;
  title: string;
  filename: string;
  url: string;
  mime_type: string;
  type: string;
  subtype: string;
};

export type FormType = {
  id: number;
  title: string;
  description: string;
  button: { type: string; text: string; imageUrl: string };
  fields: Array<FormFieldPropsType>;
};
