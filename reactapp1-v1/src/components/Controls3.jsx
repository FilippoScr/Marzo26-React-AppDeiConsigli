export default function Controls3({ onReset, isEmpty }) {
  return (
    <div>
      <button onClick={onReset} disabled={isEmpty}>
        Svuota Lista
      </button>
    </div>
  );
}
