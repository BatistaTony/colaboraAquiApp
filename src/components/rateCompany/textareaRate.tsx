import { RateCompanyTextarea } from "./rateCompanyStyle";

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
    <RateCompanyTextarea>
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      ></textarea>
    </RateCompanyTextarea>
  );
}
