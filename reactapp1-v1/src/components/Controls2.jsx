export default function Controls2({ onSave, isEmpty, isFull }) {
  return (
    <div>
      <button onClick={onSave} disabled={isEmpty || isFull}>
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
