import { useState, useEffect } from "react";
import Header from "./components/Header";
import Controls1 from "./components/Controls1";
import Controls2 from "./components/Controls2";
import SuggestionList from "./components/SuggestionList";
import Controls3 from "./components/Controls3";
import SavedList from "./components/SavedList";
import "./Style.css"
import { useCallback } from "react";

export default function App() {
  const suggestions = [
    "Bevi più acqua.",
    "Fai una passeggiata.",
    "Leggi 10 pagine.",
    "Mangia vegetali.",
    "Riduci l'uso del telefono."
  ];

  const [shown, setShown] = useState([]); // Un array vuoto. (Hook)

  useEffect(() => {
    console.log("Lista aggiornata dei consigli:", shown);
  }, [shown]);


  // function handleRequest() con useCallback() (Hook).
  const handleRequest = useCallback(() => {
    // 1. Se hai già mostrato tutti i consigli, fermati.
    if (shown.length === suggestions.length) return;

    // 2. Prende soltanto gli elementi da suggestions non ancora presenti in shown.
    const remainingSugg = suggestions.filter(s => !shown.includes(s));

    // 3. Prendi un consiglio casuale tra i rimanenti.
    const random = remainingSugg[Math.floor(Math.random() * remainingSugg.length)];

    // 4. Quando non è un duplicato e non sono finiti i consigli, aggiunge il consiglio.
    setShown([...shown, random]);
  }, [shown, suggestions]);

  // useEffect (parte dopo l'aggiunta dell'ultimo elemento tramite il return sottostante).
  /* useEffect(() => {
    if (shown.length === suggestions.length && suggestions.length > 0) {
      setTimeout(() => {
        alert("Hai già mostrato tutti i consigli!"); // Avviso di cosigli finiti.
      }, 500);
    }
  }, [shown]); */

  const handleReset = useCallback(() => {
    setShown([]); // Svuota shown/lista.
  }, []);

  const handleRemove = useCallback((textToRemove) => {
    setShown(shown.filter(el => el !== textToRemove));
  }, [shown]);

  const [saved, setSaved] = useState([]);

  const handleSave = useCallback(() => {
    setSaved(shown);
  }, [shown]);

  return (
    <div>
      <Header />

      <div className="ricevuti">
        <Controls1
          onRequest={handleRequest}
          onReset={handleReset}
          totalCount={suggestions.length} /* Lunghezza array consigli. */
          shownCount={shown.length} /* Lunghezza array riempibile. */
          isComplete={shown.length === suggestions.length} /* Equivalenza array. - Al posto di useEffect. */
        />

        <h2>Consigli Ricevuti:</h2>

        <SuggestionList shown={shown} onRemove={handleRemove} />

        <Controls2
          onSave={handleSave}
          isEmpty={shown.length === 0}
          isFull={saved.length !== 0}
        />
      </div>


      <div className="salvati">
        <h2>Consigli Salvati:</h2>

        <SavedList
          saved={saved}
          isEmpty={saved.length === 0}
        />

        <Controls3
          onReset={() => setSaved([])}
          isEmpty={saved.length === 0}
        />
      </div>
    </div>
  );
}