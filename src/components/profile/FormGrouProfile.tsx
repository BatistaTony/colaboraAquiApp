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
  errorIsOn: string;
}

export default function FormGroupProfile({
  onChange,
  label,
  msg,
  name,
  value,
  type,
  onKeyUp,
  errorIsOn,
  ...props
}: IFormGrouProfile) {
  return (
    <DivOfFormGroup data-type={name}>
      <label htmlFor={name}>{label}</label>
      <FormGroupUserData isEmpty={name === errorIsOn}>
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
      <SimpleTextForm isError={name === errorIsOn}>{msg}</SimpleTextForm>
    </DivOfFormGroup>
  );
}
