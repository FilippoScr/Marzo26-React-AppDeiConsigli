import { useSuggestions } from "../contexts/Context";

export default function Controls1() {

  const { suggestions, shown, handleRequest, handleReset } = useSuggestions();

  const totalCount = suggestions.length /* Lunghezza array consigli. */
  const shownCount = shown.length /* Lunghezza array riempibile. */
  const isComplete = shownCount === totalCount /* Equivalenza array. - Al posto di useEffect. */
  const isRemaining = totalCount - shownCount /* Consigli rimasti. */

  return (
    <div>
      <button onClick={handleRequest} disabled={isComplete}>
        Richiedi un Consiglio
      </button>

      <button onClick={handleReset} disabled={shownCount === 0}>
        Resetta
      </button>

      {isComplete && (
        <p className="warning">
          Hai già ricevuto tutti i consigli disponibili, prova a resettare!
        </p>
      )}

      <p>
        Totale di consigli ricevuti: {shownCount} &emsp; Totale consigli disponibili: {isRemaining}
      </p>
    </div>
  );
}