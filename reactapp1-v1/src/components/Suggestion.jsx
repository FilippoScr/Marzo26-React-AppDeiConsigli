import { useEffect } from "react";

export default function Suggestion({ text, onRemove }) {

  useEffect(() => {
    console.log("Montato:", text);
    return () => {
      console.log("Smontato:", text);
    };
  }, []);

  return <li>
    <span>{text}</span>
    <span className="removeBtn" onClick={() => onRemove(text)} title="Rimuovi Consiglio">❌</span>
  </li>;
}
