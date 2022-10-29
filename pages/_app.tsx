import "styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps, router }: AppProps) {
  return <Component {...pageProps} key={router.pathname} />;
}

export default App;
