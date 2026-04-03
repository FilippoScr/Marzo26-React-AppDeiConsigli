import { useSuggestions } from "../contexts/Context";
import { useEffect } from "react";

export default function Suggestion({ text }) {
  const { handleRemove } = useSuggestions();

  useEffect(() => {
    console.log("Montato:", text);
    return () => {
      console.log("Smontato:", text);
    };
  }, []);

  return <li>
    <span>{text}</span>
    <span className="removeBtn" onClick={() => handleRemove(text)} title="Rimuovi Consiglio">❌</span>
  </li>;
}
