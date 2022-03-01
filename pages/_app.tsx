import { FC } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <ThemeProvider theme={{}}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
