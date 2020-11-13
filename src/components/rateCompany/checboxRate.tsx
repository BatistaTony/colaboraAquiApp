interface IProps {
  isChecked: boolean;
  onClick?: any;
}

export default function CustomCheckBox({
  isChecked,
  onClick,
  ...props
}: IProps) {
  return (
    <label className="divCheckMark" {...props}>
      <input type="checkbox" id="isGiveSuggestion" checked={isChecked} />
      <span className="checkmark"></span>
    </label>
  );
}
