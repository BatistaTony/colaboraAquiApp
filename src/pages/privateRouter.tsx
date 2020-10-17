import { useEffect } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { IConsumer } from "../../types";
import Spinner from "../components/spinner/spinner";

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

    return consumer.userName ? <WrappedComponent /> : <Spinner />;
  };
}
