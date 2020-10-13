import { ButtonBackStyle } from "./signUpStyle";

interface IProps {
  classNames?: string;
}

export default function ButtonBack({ classNames }: IProps) {
  return (
    <ButtonBackStyle className={classNames}>
      <img src="/images/icons8-left.png" alt="" /> Voltar ao inicio
    </ButtonBackStyle>
  );
}
