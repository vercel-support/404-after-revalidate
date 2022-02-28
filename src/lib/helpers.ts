export const getPathname = (url: string): string => {
  let pathname = url;

  try {
    pathname = new URL(url).pathname;
  } catch {}

  return pathname;
};
