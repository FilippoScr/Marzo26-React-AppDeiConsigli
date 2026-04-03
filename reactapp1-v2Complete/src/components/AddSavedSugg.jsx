import { useState } from "react";
import { useSuggestions } from "../contexts/Context";
import { Limit } from "./LimiterHOC";

export default function AddSavedSugg() {

    const { saved, handleAddSaved } = useSuggestions();
    const [text, setText] = useState("");

    // In alcune situazioni potrebbe non essere valido. Alternativa: text.trim() === "";
    const isEmpty = !text.trim(); // Lasciare comunque attivo il controllo "if (isEmpty || isFull) return;" in handleSubmit; il click su invio aggira il pulsante disabled, la lista si riempie così di "fantasmi", elementi vuoti che occupano memoria e potrebbero creare righe bianche dentro.
    const isFull = saved.length >= Limit;

    /* // Funzione di gestione dell'input per non accettare spazi vuoti senza altro testo; ricordarsi di riportare il nome della funzione in onChage.
    const handleInputChange = eventInput => {
        const val = eventInput.target.value;

        // Se l'utente inserisce uno spazio come primo carattere, svuota e ferma.
        if (!val.trim()) {
            setText("");
            return;
        }

        setText(val);
    }; */

    // Ignora maiuscole/minuscole, rimuove spazi esterni e riduce spazi multipli interni a uno solo.
    function normalize(str) {
        return str.toLowerCase().trim().replace(/\s+/g, " ");
    }
    function stripTag(str) {
    return str.split("(")[0]; // Oppure: str.replace("(Consiglio Aggiunto)", "").trim();.
}

    function handleSubmit(eventForm) {
        eventForm.preventDefault();
        if (isEmpty || isFull) {
            setText(""); return;
        }

        const normalizedNew = normalize(text);
        const normalizedSaved = saved.map(el => normalize(stripTag(el))); // Prima passa i consigli già salvati da stripTag per rimuovere il tag "(Consiglio Aggiunto)" che aggirava il normalize, poi passa il risultato corretto a normalize.

        // Evita di aggiungere duplicati.
        if (normalizedSaved.includes(normalizedNew)) {
            setText(""); return;
        }

        handleAddSaved(text.trim() + "\u2003\u2003\u2003(Consiglio Aggiunto)");
        setText("");
    }

    return (
        <form onSubmit={handleSubmit} className="addSSForm">
            <input disabled={isFull} type="text" value={text} onChange={eventInput => setText(eventInput.target.value)} placeholder="Aggiungi un consiglio..." />
            <button disabled={isEmpty || isFull}>Aggiungi</button>
            {text.length > 0 && isEmpty && (
                <p className="warning">
                    Inserisci vero testo!
                </p>
            )}
            {isFull && (
                <p className="warning">
                    Hai raggiunto il limite dei consigli salvabili. &emsp; Consigli salvati: {Limit}.
                </p>
            )}
        </form>
    );
}