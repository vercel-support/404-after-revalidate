declare global {
  interface Window {
    gtag: any;
  }
}

export const pageview = (url: URL) =>
  window.gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url,
  });

export const event = ({ action, params }: { action: string; params: object }) =>
  window.gtag("event", action, params);
