interface IProps {
  isGiveSuggestion: boolean;
  onClick?: any;
}

export default function CheckBoxRate({
  isGiveSuggestion,
  onClick,
  ...props
}: IProps) {
  return (
    <label className="divCheckMark" {...props}>
      <input type="checkbox" id="isGiveSuggestion" checked={isGiveSuggestion} />
      <span className="checkmark"></span>
    </label>
  );
}
