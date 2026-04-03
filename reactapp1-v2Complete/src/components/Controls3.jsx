import { useSuggestions } from "../contexts/Context";

export default function Controls3() {

  const { saved, handleSavedReset } = useSuggestions();
  const isEmpty = saved.length === 0

  return (
    <div>
      <button onClick={handleSavedReset} disabled={isEmpty}>
        Svuota Lista
      </button>
    </div>
  );
}