import type { AppProps } from "next/app";
import Head from "next/head";
import "src/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Visualizar resultados de times, ligas, jogadores e muito mais."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Meu Time</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
