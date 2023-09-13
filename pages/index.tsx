import React, { ReactElement } from "react";
import Home from "@/Home";
import Layout from "@/components/Layout";

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
