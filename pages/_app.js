import Head from "next/head";
import "../styles/globals.css";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lottie</title>
        <meta name="description" content="Find your dream care home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
