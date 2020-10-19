import Head from "next/head";
import Navbar from "../navbar/navbar";
import { LayoutStyled } from "./layoutStyle";
import { useEffect } from "react";

interface IProps {
  title?: string;
  children: any;
}

export default function Layout({ title, ...props }: IProps) {
  const pageTitle = title || "ColaboraAqui";

  useEffect(() => {
    function fadeInPage() {
      if (!window.AnimationEvent) {
        return;
      }

      var fader = document.getElementById("fader");
      fader.classList.add("fade-out");
    }

    fadeInPage();

    document.addEventListener("DOMContentLoaded", function () {
      if (!window.AnimationEvent) {
        return;
      }

      var anchors = document.getElementsByTagName("a");

      for (var idx = 0; idx < anchors.length; idx += 1) {
        if (
          anchors[idx].hostname !== window.location.hostname ||
          anchors[idx].pathname === window.location.pathname
        ) {
          continue;
        }

        anchors[idx].addEventListener("click", function (event: any) {
          var fader = document.getElementById("fader"),
            anchor = event.currentTarget;

          var listener = function () {
            window.location = anchor.href;
            fader.removeEventListener("animationend", listener);
          };
          fader.addEventListener("animationend", listener);

          event.preventDefault();

          fader.classList.add("fadeIn");
        });
      }
    });

    window.addEventListener("pageshow", function (event: PageTransitionEvent) {
      if (!event.persisted) {
        return;
      }
      var fader = document.getElementById("fader");
      fader.classList.remove("fadeIn");
    });
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
