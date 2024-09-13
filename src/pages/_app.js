import "@/styles/globals.css";

import { store } from "@/store";
import { Provider } from "react-redux";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toaster gutter={10000} toastOptions={{ duration: 4000 }} />
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>PeopleZep</title>
        <meta
          property="og:image"
          content="https://drive.google.com/uc?export=view&id=1CSnEGxdRR3vQCv_Hh7YS_B0naNbu-Nzl"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
