import Head from "next/head";
import Navbar from "../navbar/navbar";
import { LayoutStyled } from "./layoutStyle";

interface IProps {
  title?: string;
  children: any;
}

export default function Layout({ title, ...props }: IProps) {
  return (
    <LayoutStyled title={title || "ColaboraAqui"}>
      <Head>
        <title>{title || "ColaboraAqui"}</title>
      </Head>

      <Navbar />
      {props.children}
    </LayoutStyled>
  );
}
