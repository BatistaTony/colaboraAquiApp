import { useEffect, useState } from "react";
import Router from "next/router";
import { useSelector } from "react-redux";
import { IConsumer } from "../../types";
import Spinner from "../components/spinner/spinner";
import firebase from "./../../Firebase";
import { useDispatch } from "react-redux";
import { registerConsumer } from "../store/actions/consumer";

export default function PrivateRouter(
  WrappedComponent: React.FC | React.ComponentClass
) {
  return function () {
    const firebaseAuth = firebase.auth();
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const dispatch = useDispatch();

    const consumer: IConsumer = useSelector((state) => state.Consumer);

    const updateUserState = (userid: string) => {
      firebase
        .firestore()
        .collection("consumer")
        .doc(userid)
        .get()
        .then((result) => {
          dispatch(
            registerConsumer({
              userId: result.id,
              ...result.data(),
              province: result.data().address.province,
              county: result.data().address.county,
            })
          );
        });
    };

    useEffect(() => {
      firebaseAuth.onAuthStateChanged((result) => {
        if (result) {
          updateUserState(result.uid);
          setIsLogged(true);
        } else {
          Router.push("/");
        }
      });
    }, [consumer.userId]);

    return isLogged ? <WrappedComponent /> : <Spinner />;
  };
}
