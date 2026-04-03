import { useSuggestions } from "../contexts/Context";

export default function Controls2() {

  const { shown, saved, handleSave } = useSuggestions();

  const isEmpty = shown.length === 0
  const isFull = saved.length !== 0

  return (
    <div>
      <button onClick={handleSave} disabled={isEmpty || isFull}>
        Salva Consigli
      </button>

      {isFull && !isEmpty && (
        <p className="warning">
          Svuota la lista dei consigli salvati prima di salvarne altri.
        </p>
      )}
    </div>
  );
}