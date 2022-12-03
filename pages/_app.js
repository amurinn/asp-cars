import "../styles/globals.scss";
import { Montserrat } from "@next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
