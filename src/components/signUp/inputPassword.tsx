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
  errorMsg?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
}

export default function InputPassword({
  handleChange,
  errorIsOn,
  classNames,
  errorMsg,
  id,
  name,
  value,
  placeholder,
}: IProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormGroupGrand>
      <FormGroup
        className={`inputPassword ${classNames}`}
        isEmpty={errorIsOn === "password" || errorIsOn === name}
      >
        <input
          type={showPassword ? "text" : "password"}
          name={name ? name : "password"}
          id={id ? id : "password"}
          onChange={handleChange}
          placeholder={placeholder ? placeholder : "Senha"}
          maxLength={8}
          value={value ? value : ""}
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
        <ErrorMessage className="error_name_">
          {errorMsg ? errorMsg : ""}
        </ErrorMessage>
      )}
    </FormGroupGrand>
  );
}
