export default function SavedList({ saved, isEmpty }) {
    return (
        <div>
            {isEmpty && (
            <p className="warning">Nessun consiglio salvato.</p>
                  )}
            <ul>
                {saved.map((el, i) => (
                    <li key={i}>{el}</li>
                ))}
            </ul>
        </div>
    );
}