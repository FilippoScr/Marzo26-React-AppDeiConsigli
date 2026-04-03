import { useSuggestions } from "../contexts/Context";

export const Limit = 8;

export function listLimiter(List) {
    return function LimiterComponent(props) { // Non riceviamo "props" da LimitedSavedList (in SavedList) ma lo lasciamo come possibilità futura.

        // HOC non riutilizzabile per altri componenti, usando saved diventa specifico per SavedList.
        const { saved } = useSuggestions();
        const limiterItems = saved.slice(0, Limit);

        // Verrà renderizzata una copia limitata di SavedList.
        return <List {...props} possibleItemsHOC={limiterItems} />; // Come detto in precedensa, qui {...props} è soltanto una predisposizione.
    };
}