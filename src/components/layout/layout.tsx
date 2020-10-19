import Head from "next/head";
import Navbar from "../navbar/navbar";
import { LayoutStyled } from "./layoutStyle";
import { useEffect } from "react";
import fadeAnimation from "./layoutAnimation";

interface IProps {
  title?: string;
  children: any;
}

export default function Layout({ title, ...props }: IProps) {
  const pageTitle = title || "ColaboraAqui";

  useEffect(() => {
    fadeAnimation();
  });

  return (
    <LayoutStyled title={pageTitle}>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <svg id="fader"></svg>

      <Navbar title={pageTitle} />
      {props.children}
    </LayoutStyled>
  );
}
