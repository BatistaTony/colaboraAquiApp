import { useState, useEffect } from "react";
import { InputIcon } from "./../signUp/signUpStyle";

import {
  CustomSelectRatingStyle,
  ItemSelect,
  SelectRatingList,
} from "./companySuggestionAndRateStyle";

interface ISelectProps {
  handleChange: any;
  values: Array<string>;
  defaultValueSelect: string;
  classNames?: string;
  onClick?: any;
  whatToDo: string;
}

export default function CustomSelectRating({
  handleChange,
  values,
  defaultValueSelect,
  classNames,
  whatToDo,
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
    <CustomSelectRatingStyle
      {...props}
      className={`customSelect ${classNames} `}
    >
      <button onClick={() => setShowList(!showList)} className="customSelect">
        <span className="customSelect">{defaultValueSelect} </span>
      </button>
      <InputIcon
        className="customSelect"
        onClick={() => setShowList(!showList)}
      >
        <img className="customSelect iconeSeta" src="/images/seta.png" alt="" />
      </InputIcon>

      {showList && (
        <SelectRatingList
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <ItemSelect>{whatToDo + ":"}</ItemSelect>

          {values.map((value, index) => (
            <ItemSelect
              key={index}
              active={value === defaultValueSelect}
              onClick={() => chooseValue(value)}
            >
              {value}
            </ItemSelect>
          ))}
        </SelectRatingList>
      )}
    </CustomSelectRatingStyle>
  );
}
