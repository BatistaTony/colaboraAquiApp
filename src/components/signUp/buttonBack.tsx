import { useContext } from "react";
import { appContext } from "../appContext";
import { ButtonBackStyle } from "./signUpStyle";

export default function ButtonBack({ classNames, ...props }) {
  const [showSIgnUp, toggleSignUp] = useContext(appContext);

  const backToHome = () => {
    toggleSignUp();
  };

  return (
    <ButtonBackStyle className={classNames} onClick={backToHome} {...props}>
      <img src="/images/icons8-left.png" alt="" /> Voltar ao inicio
    </ButtonBackStyle>
  );
}
