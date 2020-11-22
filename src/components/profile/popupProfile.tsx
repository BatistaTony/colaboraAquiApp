import { PopuProfileStyle } from "./profileStyle";

interface IProps {
  msg: string;
  bg?: string;
}

export default function PopUpProfile({ msg }) {
  return (
    <PopuProfileStyle initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <p>{msg}</p>
    </PopuProfileStyle>
  );
}
