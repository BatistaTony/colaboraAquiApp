import {
  DivOfFormGroup,
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
  onKeyUp?: any;
}

export default function FormGroupProfile({
  onChange,
  label,
  msg,
  name,
  value,
  type,
  onKeyUp,
  ...props
}: IFormGrouProfile) {
  return (
    <DivOfFormGroup data-type={name}>
      <label htmlFor={name}>{label}</label>
      <FormGroupUserData>
        <input
          type={type ? type : "text"}
          value={value}
          name={name}
          id={name}
          onKeyUp={onKeyUp}
          onChange={onChange}
          {...props}
        />
      </FormGroupUserData>
      <SimpleTextForm>{msg}</SimpleTextForm>
    </DivOfFormGroup>
  );
}
