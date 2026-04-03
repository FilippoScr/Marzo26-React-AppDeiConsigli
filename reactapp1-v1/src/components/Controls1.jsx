export default function Controls1({
  onRequest,
  onReset,
  totalCount,
  shownCount,
  isComplete
}) {
  return (
    <div>
      <button onClick={onRequest} disabled={isComplete}>
        Richiedi un Consiglio
      </button>

      <button onClick={onReset} disabled={shownCount === 0}>
        Resetta
      </button>

      {isComplete && (
        <p className="warning">
          Hai già ricevuto tutti i consigli disponibili, prova a resettare!
        </p>
      )}

      <p>
        Totale di consigli ricevuti: {shownCount} &emsp; Totale consigli disponibili: {totalCount - shownCount}
      </p>
    </div>
  );
}
