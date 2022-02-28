import { FC, useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { ThemeProvider } from "styled-components";

import { pageview } from "lib/ga";
import theme from "lib/theme";

import "../styles/globals.css";

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      router.events.on("routeChangeComplete", pageview);

      return () => router.events.off("routeChangeComplete", pageview);
    }
  }, [router.events]);

  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
          />
          <Script>
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
  page_path: window.location.pathname,
});`}
          </Script>
        </>
      )}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
