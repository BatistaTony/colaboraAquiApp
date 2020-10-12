import { useState, useEffect, Props } from "react";
import { FormSelect, InputIcon, SelectList } from "./signUpStyle";
import { CSSTransition } from "react-transition-group";

interface ISelectProps {
  handleChange: any;
  values: Array<string>;
  defaultValueSelect: string;
  props: any;
}

export default function CustomSelect({
  handleChange,
  values,
  defaultValueSelect,
  ...props
}) {
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
    <FormSelect {...props}>
      <button onClick={() => setShowList(!showList)} className="customSelect">
        <span className="customSelect">{defaultValueSelect} </span>
      </button>
      <InputIcon
        className="customSelect"
        onClick={() => setShowList(!showList)}
      >
        <img className="customSelect" src="/images/icons8-eye.png" alt="" />
      </InputIcon>

      <CSSTransition
        unmountOnExit
        addEndListener={() => {}}
        timout={200}
        in={showList}
        classNames="my-node"
      >
        <SelectList length={values.length}>
          {values.map((value, index) => (
            <li key={index} onClick={() => chooseValue(value)}>
              {value}
            </li>
          ))}
        </SelectList>
      </CSSTransition>
    </FormSelect>
  );
}
