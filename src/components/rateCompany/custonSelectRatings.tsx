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

    const regex = new RegExp("customSelect", "gi");

    function HideOpenedDiv(event) {
      if (!event.target.className.match(regex)) {
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
          className="customSelect"
        >
          <li className="customSelect">{whatToDo + ":"}</li>

          {values.map((value, index) => (
            <li
              className={`customSelect  ${
                value === defaultValueSelect ? `active` : ""
              } `}
              key={index}
              onClick={() => chooseValue(value)}
            >
              {value}
            </li>
          ))}
        </SelectRatingList>
      )}
    </CustomSelectRatingStyle>
  );
}
