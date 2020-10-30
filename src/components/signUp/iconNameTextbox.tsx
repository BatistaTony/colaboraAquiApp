interface IProps {
  userAccept: boolean;
}

export default function IconTextBox({ userAccept }: IProps) {
  return (
    <img
      src={
        userAccept ? "images/icons8-ok.svg" : "/images/icons8-box_important.svg"
      }
      alt=""
    />
  );
}
