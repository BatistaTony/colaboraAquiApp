interface IProps {
  isGiveSuggestion: boolean;
}

export default function CheckBoxRate({ isGiveSuggestion, ...props }: IProps) {
  return (
    <label className="divCheckMark" {...props}>
      <input type="checkbox" id="isGiveSuggestion" checked={isGiveSuggestion} />
      <span className="checkmark"></span>
    </label>
  );
}
