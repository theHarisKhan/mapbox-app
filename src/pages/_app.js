import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../styles/theme.config";
import "mapbox-gl/dist/mapbox-gl.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";

// Binding Events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChnageError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
