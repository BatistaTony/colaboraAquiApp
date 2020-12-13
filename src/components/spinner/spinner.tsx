import SpinnerIcon from "./spinnerIcon";
import { DivSpinner, SpinnerSpinning } from "./spinnerStyle";

export default function Spinner() {
  return (
    <DivSpinner>
      <SpinnerSpinning>
        <SpinnerIcon />
      </SpinnerSpinning>
    </DivSpinner>
  );
}
