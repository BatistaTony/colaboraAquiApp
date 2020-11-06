import { RateCompanyTextarea } from "./modalStyle";

interface IProps {
  handleChange: any;
  placeholder: string;
  name: string;
}

export default function TextareaRate({
  handleChange,
  placeholder,
  name,
}: IProps) {
  return (
    <RateCompanyTextarea initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      ></textarea>
    </RateCompanyTextarea>
  );
}
