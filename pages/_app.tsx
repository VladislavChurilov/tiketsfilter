import React, { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";
import { NextPage } from "next/types";
import Head from "next/head";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  getMetaData?: (page: ReactElement) => ReactNode;
};
interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component } = props;
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <React.Fragment>
      <Head key="title">
        <title>SuWorld</title>
      </Head>
      {getLayout(<Component {...props.pageProps} />)}
    </React.Fragment>
  );
}
