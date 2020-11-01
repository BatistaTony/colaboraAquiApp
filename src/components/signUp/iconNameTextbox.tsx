interface IProps {
  userAccept: boolean;
  titleImg: string;
}

export default function IconTextBox({ userAccept, titleImg }: IProps) {
  return (
    <img
      src={
        userAccept ? "images/icons8-ok.svg" : "/images/icons8-box_important.svg"
      }
      title={titleImg}
      alt=""
    />
  );
}
