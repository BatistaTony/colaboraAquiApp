import { useEffect } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { IConsumer } from "../../types";

export default function PrivateRouter(
  WrappedComponent: React.FC | React.ComponentClass
) {
  return function () {
    const consumer: IConsumer = useSelector((state) => state.Consumer);

    useEffect(() => {
      if (consumer.userName.length <= 0) {
        Router.push("/");
      }
    }, [consumer.userName]);

    return consumer.userName ? <WrappedComponent /> : <h1>{"  "}</h1>;
  };
}
