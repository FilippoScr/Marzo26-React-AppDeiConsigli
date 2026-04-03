import { useSuggestions } from "../contexts/Context";
import Suggestion from "./Suggestion";

export default function SuggestionList() {
  const { shown } = useSuggestions();

  return (
    <ul>
      {shown.map((el, i) => (
        <Suggestion key={i} text={el} />
      ))}
    </ul>
  );
}