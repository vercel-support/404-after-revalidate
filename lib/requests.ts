import { OptionsType } from "../lib/types";

const url = process.env.NEXT_PUBLIC_WP_API_URL;

export const getOptions = async (): Promise<OptionsType> =>
  await fetch(`${url}/acf/v3/options/options`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .catch((err) => console.log("Error:", err));

export const getPages = async (params = "") =>
  await fetch(`${url}/wp/v2/pages${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .catch((err) => console.log("Error:", err));

export const getPageBySlug = async (slug: string) =>
  await fetch(`${url}/wp/v2/pages?slug=${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .then((pages) => pages[0])
    .catch((err) => console.log("Error:", err));

export const getPagesByParentId = async (id: number) =>
  await fetch(`${url}/wp/v2/pages?parent=${id}&per_page=100`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .then((pages) => pages)
    .catch((err) => console.log("Error:", err));
