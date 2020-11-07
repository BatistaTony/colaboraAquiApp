import { RateCompanyTextarea } from "./modalStyle";

interface IProps {
  handleChange: any;
  placeholder: string;
  name: string;
  value: string;
}

export default function TextareaRate({
  handleChange,
  placeholder,
  name,
  value,
}: IProps) {
  return (
    <RateCompanyTextarea initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <textarea name={name} placeholder={placeholder} onChange={handleChange}>
        {value}
      </textarea>
    </RateCompanyTextarea>
  );
}
