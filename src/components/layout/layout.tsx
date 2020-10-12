import Head from "next/head";
import Navbar from "../navbar/navbar";
import { LayoutStyled } from "./layoutStyle";

interface IProps {
  title?: string;
  children: any;
}

export default function Layout({ title, ...props }: IProps) {
  const pageTitle = title || "ColaboraAqui";

  return (
    <LayoutStyled title={pageTitle}>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Navbar title={pageTitle} />
      {props.children}
    </LayoutStyled>
  );
}
