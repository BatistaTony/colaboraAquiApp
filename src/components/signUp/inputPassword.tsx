import { useState } from "react";
import {
  FormGroup,
  FormGroupGrand,
  InputIcon,
  ErrorMessage,
} from "./signUpStyle";

interface IProps {
  handleChange: any;
  errorIsOn: string;
  classNames?: string;
  errorMsg: string;
}

export default function InputPassword({
  handleChange,
  errorIsOn,
  classNames,
  errorMsg,
}: IProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormGroupGrand>
      <FormGroup
        className={`inputPassword ${classNames}`}
        isEmpty={errorIsOn === "password"}
      >
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="Senha"
        />

        <InputIcon className="iconeSee">
          <img
            onClick={() => setShowPassword(!showPassword)}
            src={
              showPassword
                ? "/images/icons8-invisible.svg"
                : "/images/icons8-eye.png"
            }
            alt=""
          />
        </InputIcon>
      </FormGroup>
      {errorIsOn === "password" && (
        <ErrorMessage className="error_name_">{errorMsg}</ErrorMessage>
      )}
    </FormGroupGrand>
  );
}
