import { ButtonBackStyle } from "./signUpStyle";

interface IProps {
  classNames?: string;
}

export default function ButtonBack({ classNames, ...props }: IProps) {
  return (
    <ButtonBackStyle className={classNames} {...props}>
      <img src="/images/icons8-left.png" alt="" /> Voltar ao inicio
    </ButtonBackStyle>
  );
}
