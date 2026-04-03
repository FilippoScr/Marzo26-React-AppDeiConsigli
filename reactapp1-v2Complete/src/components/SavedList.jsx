import { useSuggestions } from "../contexts/Context";
import { listLimiter } from "./LimiterHOC";

function SavedList({ possibleItemsHOC }) {
    
    const { saved } = useSuggestions();
    const list = possibleItemsHOC ?? saved; // Funziona con e senza HOC.

    const isEmpty = saved.length === 0

    return (
        <div>
            {isEmpty && (
                <p className="warning">Nessun consiglio salvato.</p>
            )}
            <ul>
                {/* Senza HOC: saved.map. */}
                {list.map((el, i) => (
                    <li key={i}>{el}</li>
                ))}
            </ul>
        </div>
    );
}

const LimitedSavedList = listLimiter(SavedList);
export default LimitedSavedList;