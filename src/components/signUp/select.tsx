import { useState, useEffect, Props } from "react";
import {
  FormGroupGrand,
  FormSelect,
  InputIcon,
  SelectList,
  ErrorMessage,
} from "./signUpStyle";
import { CSSTransition } from "react-transition-group";

interface ISelectProps {
  handleChange: any;
  values: Array<string>;
  defaultValueSelect: string;
  isEmpty: boolean;
  classNames?: string;
  errorMsg: string;
  disabled?: boolean;
  onClick?: any;
}

export default function CustomSelect({
  handleChange,
  values,
  defaultValueSelect,
  isEmpty,
  classNames,
  errorMsg,
  disabled,
  ...props
}: ISelectProps) {
  const [showList, setShowList] = useState<boolean>(false);

  const chooseValue = (value: string) => {
    handleChange(value);
    setShowList(false);
  };

  useEffect(() => {
    document.addEventListener("click", HideOpenedDiv, true);

    function HideOpenedDiv(event) {
      if (event.target.className !== "customSelect") {
        setShowList(false);
      }
    }
  });

  return (
    <FormGroupGrand>
      <FormSelect
        isEmpty={isEmpty}
        {...props}
        className={`customSelect ${classNames} `}
      >
        <button
          disabled={disabled}
          onClick={() => setShowList(!showList)}
          className="customSelect"
        >
          <span className="customSelect">{defaultValueSelect} </span>
        </button>
        <InputIcon
          className="customSelect"
          onClick={() => setShowList(!showList)}
        >
          <img className="customSelect" src="/images/seta.png" alt="" />
        </InputIcon>

        {showList && (
          <SelectList
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            length={values.length}
          >
            {values.map((value, index) => (
              <li
                className="customSelect"
                key={index}
                onClick={() => chooseValue(value)}
              >
                {value}
              </li>
            ))}
          </SelectList>
        )}
      </FormSelect>
      {isEmpty && (
        <ErrorMessage className="error_name_">{errorMsg}</ErrorMessage>
      )}
    </FormGroupGrand>
  );
}
