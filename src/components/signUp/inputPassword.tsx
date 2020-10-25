import { useState } from "react";
import { FormGroup, InputIcon } from "./signUpStyle";

interface IProps {
  handleChange: any;
  errorIsOn: string;
  classNames?: string;
}

export default function InputPassword({
  handleChange,
  errorIsOn,
  classNames,
}: IProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
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
          src="/images/icons8-eye.png"
          alt=""
        />
      </InputIcon>
    </FormGroup>
  );
}
