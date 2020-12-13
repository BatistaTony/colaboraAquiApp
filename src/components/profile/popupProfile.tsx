import { PopuProfileStyle } from "./profileStyle";

interface IProps {
  msg: string;
  isError?: boolean;
}

export default function PopUpProfile({ msg, isError }) {
  return (
    <PopuProfileStyle
      isError={isError}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p>{msg}</p>
    </PopuProfileStyle>
  );
}
