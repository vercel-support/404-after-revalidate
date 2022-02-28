import {
  ACFOptionsType,
  AgendaItemType,
  NewsItemType,
  VacancyType,
  StoryType,
} from "types";

import { PageType } from "./types";

const url = process.env.NEXT_PUBLIC_WP_API_URL;
const username = process.env.NEXT_PUBLIC_GF_KEY;
const password = process.env.NEXT_PUBLIC_GF_SECRET;
const auth = Buffer.from(`${username}:${password}`).toString("base64");

export const getPages = async (params = ""): Promise<Array<PageType>> =>
  await fetch(`${url}/wp/v2/pages${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .catch((err) => console.log("Error:", err));

export const getPageBySlug = async (slug: string): Promise<PageType> =>
  await fetch(`${url}/wp/v2/pages?slug=${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .then((pages) => pages[0])
    .catch((err) => console.log("Error:", err));

export const getPagesByParentId = async (
  id: number
): Promise<Array<PageType>> =>
  await fetch(`${url}/wp/v2/pages?parent=${id}&per_page=100`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .then((pages) => pages)
    .catch((err) => console.log("Error:", err));

export const getAgendaItems = async (
  params = ""
): Promise<Array<AgendaItemType>> =>
  await fetch(`${url}/wp/v2/agenda-items${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .catch((err) => console.log("Error:", err));

export const getAgendaItemBySlug = async (slug: string) =>
  await fetch(`${url}/wp/v2/agenda-items?slug=${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .then((vacancies) => vacancies[0])
    .catch((err) => console.log("Error:", err));

export const getNewsItems = async (params = ""): Promise<Array<NewsItemType>> =>
  await fetch(`${url}/wp/v2/nieuws-items${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .catch((err) => console.log("Error:", err));

export const getNewsItemBySlug = async (slug: string) =>
  await fetch(`${url}/wp/v2/nieuws-items?slug=${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .then((vacancies) => vacancies[0])
    .catch((err) => console.log("Error:", err));

export const getVacancies = async (params = ""): Promise<Array<VacancyType>> =>
  await fetch(`${url}/wp/v2/vacatures${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .catch((err) => console.log("Error:", err));

export const getVacancyBySlug = async (slug: string) =>
  await fetch(`${url}/wp/v2/vacatures?slug=${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .then((vacancies) => vacancies[0])
    .catch((err) => console.log("Error:", err));

export const getACFOptions = async (): Promise<ACFOptionsType> =>
  await fetch(`${url}/acf/v3/options/options`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .catch((err) => console.log("Error:", err));

export const getForm = async (id: number) =>
  await fetch(`${url}/gf/v2/forms/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .catch((err) => console.log("Error:", err));

export const postFormSubmission = async (formId: number, formData: FormData) =>
  await fetch(`${url}/gf/v2/forms/${formId}/submissions`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
    },
    body: formData,
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .catch((err) => console.log("Error:", err));

export const getStories = async (params = ""): Promise<Array<StoryType>> =>
  await fetch(`${url}/wp/v2/verhalen${params}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .catch((err) => console.log("Error:", err));

export const getStoryBySlug = async (slug: string) =>
  await fetch(`${url}/wp/v2/verhalen?slug=${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "Application/json",
    },
  })
    .then((res) => (res.ok ? res.json() : Error()))
    .then((vacancies) => vacancies[0])
    .catch((err) => console.log("Error:", err));
