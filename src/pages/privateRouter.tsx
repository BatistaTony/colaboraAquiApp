import { Fragment, Component, useEffect } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { IConsumer } from "../../types";
import Consumer from "../store/reducers/consumer";

export default function PrivateRouter(
  WrappedComponent: React.FC | React.ComponentClass
) {
  return function () {
    const consumer: IConsumer = useSelector((state) => state.Consumer);

    useEffect(() => {
      if (!consumer.name) {
        Router.push("/");
      }
    }, [consumer.name]);

    return consumer.name ? <WrappedComponent /> : <h1>You Need to log in</h1>;
  };
}
