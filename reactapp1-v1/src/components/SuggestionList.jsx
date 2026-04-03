import Suggestion from "./Suggestion";

export default function SuggestionList({ shown, onRemove }) {
  return (
    <ul>
      {shown.map((el, i) => (
        <Suggestion key={i} text={el} onRemove={onRemove} />
      ))}
    </ul>
  );
}