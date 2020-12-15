import { useEffect, useState } from "react";
import {
  ModalCodeStyle,
  OverlayModalCode,
  GroupBtn,
  ButtonModal,
} from "./modalCodeStyle";
import {
  FormGroup,
  TextForm,
  Title,
  ErrorMessage,
  LoadingAnimation,
} from "./signUpStyle";

import firebase from "./../../../Firebase";
import { IConsumer } from "../../../types";
import SpinnerIcon from "../spinner/spinnerIcon";

interface IProps {
  toggleModalCode: any;
  confirmationResult: any;
  consumerData: IConsumer;
  toggleModalSucess: any;
}

const ModalSecretCode = ({
  toggleModalCode,
  confirmationResult,
  consumerData,
  toggleModalSucess,
}: IProps) => {
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [secretCode, setSecretCode] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmationResultModal, setConfirmationResultModal] = useState<any>(
    {}
  );

  const firebaseAuth = firebase.auth();
  const firestore = firebase.firestore();

  const handleChange = (event: any) => {
    setSecretCode(event.target.value);
  };

  const authWithFakeEmail = () => {
    let email = `${consumerData.phone}@colabora.com`;

    firebaseAuth
      .createUserWithEmailAndPassword(email, consumerData.password)
      .then((response) => {
        firestore
          .collection("consumer")
          .doc(response.user.uid)
          .set({
            fullName: "",
            isKeepAnonymous: true,
            phone: consumerData.phone ? consumerData.phone : "",
            userName: consumerData.userName
              ? consumerData.userName
              : "ColaboraUser",
            address: {
              county: consumerData.county ? consumerData.county : "",
              province: consumerData.province ? consumerData.province : "",
            },
            dataNascimento: consumerData.dataNascimento
              ? consumerData.dataNascimento
              : 0,
            email: "",
          })
          .then((response) => {
            setIsLoading(false);

            toggleModalCode();
            toggleModalSucess();
          });
      });
  };

  const confirmCode = () => {
    if (secretCode) {
      setErrorMsg("");
      setIsLoading(true);
      confirmationResultModal
        .confirm(secretCode)
        .then((response) => {
          authWithFakeEmail();
        })
        .catch((error) => {
          setIsLoading(false);
          if (error.code === "auth/invalid-verification-code") {
            setErrorMsg("codigo errado");
          } else {
            setErrorMsg("Problema com a conexão da internet");
          }
        });
    } else {
      setErrorMsg("Preenche este campo");
    }
  };

  const reSendCode = () => {
    const appVerify = new firebase.auth.RecaptchaVerifier("resend-button", {
      size: "invisible",
    });

    setIsLoading(true);

    firebaseAuth
      .signInWithPhoneNumber(consumerData.phone, appVerify)
      .then((response) => {
        setConfirmationResultModal(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.code === "auth/invalid-verification-code") {
          setErrorMsg("codigo errado");
        } else {
          setErrorMsg("Problema com a conexão da internet");
        }
      });
  };

  useEffect(() => {
    setConfirmationResultModal(confirmationResult);
  }, []);

  return (
    <OverlayModalCode
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <ModalCodeStyle
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title className="title_modal">Verificação do telefone</Title>
        <TextForm className="text_modal">
          Foi enviado um codigo para o número <span>{consumerData.phone}</span>,
          por favor digite no campo abaixo.
        </TextForm>
        <FormGroup className="inputCode" isEmpty={errorMsg.length > 0}>
          <input
            type="number"
            name="secretCode"
            id="secretCode"
            onChange={handleChange}
            placeholder="codigo"
            value={secretCode}
          />
        </FormGroup>
        <ErrorMessage className="error_name_" id="resend-button">
          {errorMsg}
        </ErrorMessage>

        {isLoading && (
          <LoadingAnimation>
            <SpinnerIcon />
          </LoadingAnimation>
        )}

        <GroupBtn>
          <ButtonModal
            className="resend"
            onClick={reSendCode}
            disabled={isLoading}
          >
            Reenivar
          </ButtonModal>
          <div className="divBtn_md_code">
            <ButtonModal onClick={toggleModalCode} cancel={true}>
              Cancelar
            </ButtonModal>
            <ButtonModal onClick={confirmCode}>Confirmar</ButtonModal>
          </div>
        </GroupBtn>
      </ModalCodeStyle>
    </OverlayModalCode>
  );
};

export default ModalSecretCode;
