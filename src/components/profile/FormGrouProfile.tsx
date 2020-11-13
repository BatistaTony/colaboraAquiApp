import {
  DivOfFormGroup,
  FormDataInfo,
  FormGroupUserData,
  SimpleTextForm,
} from "./profileStyle";

interface IFormGrouProfile {
  onChange: any;
  name: string;
  msg: string;
  label: string;
  value: string | number;
  type?: string;
}

export default function FormGroupProfile({
  onChange,
  label,
  msg,
  name,
  value,
  type,
  ...props
}: IFormGrouProfile) {
  return (
    <DivOfFormGroup>
      <label htmlFor={name}>{label}</label>
      <FormGroupUserData>
        <input
          type={type ? type : "text"}
          value={value}
          name={name}
          id={name}
          onChange={onChange}
          {...props}
        />
      </FormGroupUserData>
      <SimpleTextForm>{msg}</SimpleTextForm>
    </DivOfFormGroup>
  );
}
