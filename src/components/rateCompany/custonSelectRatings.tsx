import { useState, useEffect } from "react";
import { InputIcon, SelectList } from "./../signUp/signUpStyle";
import { CSSTransition } from "react-transition-group";
import {
  CustomSelectRatingStyle,
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

      <CSSTransition
        unmountOnExit
        addEndListener={() => {}}
        timout={200}
        in={showList}
        classNames="my-node"
      >
        <SelectRatingList>
          <li>{whatToDo + ":"}</li>

          {values.map((value, index) => (
            <li key={index} onClick={() => chooseValue(value)}>
              {value}
            </li>
          ))}
        </SelectRatingList>
      </CSSTransition>
    </CustomSelectRatingStyle>
  );
}
