import "../styles/globals.scss";
import { Montserrat } from "@next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
        disable: 'phone',
    });
  }, []);

  return (
    <>
      <style jsx global>
        {`
          :root {
            --montserrat: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <title>ASP Auto Půjčovna</title>
        <meta name="title" content="ASP Auto Půjčovna" />
        <meta name="description" content="Půjč si auto! V Praze, Mělníku a okolí." />
        <meta name="keywords" content="Auto pujcovna praha,Auto praha,Car sharing praha,Auto melnik" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Czech" />
      </Head>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
