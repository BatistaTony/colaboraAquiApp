import { ButtonBackStyle } from "./signUpStyle";

interface IProps {
  classNames?: string;
  onChange?: () => void;
}

export default function ButtonBack({ classNames, onChange, ...props }: IProps) {
  return (
    <ButtonBackStyle className={classNames} onClick={onChange} {...props}>
      <img src="/images/icons8-left.png" alt="" /> Voltar ao inicio
    </ButtonBackStyle>
  );
}
