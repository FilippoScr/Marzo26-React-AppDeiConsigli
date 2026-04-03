import { createContext, useContext, useState, useCallback, useEffect } from "react";

const Context = createContext();

export function SuggestionsProvider({ children }) {
  const [suggestions, setSuggestions] = useState([
    "Bevi più acqua.",
    "Fai una lunga passeggiata ogni giorno.",
    "Leggi 10 pagine di un libro.",
    "Mangia spesso vegetali.",
    "Riduci l'uso del telefono.",
    "Impara una seconda lingua.",
    "Visita nuove nazioni.",
    "Prenditi cura di te stesso.",
    "Conosci persone nuove.",
    "Seguimi su GitHub."
  ]);

  const [shown, setShown] = useState([]);
  const [saved, setSaved] = useState([]);

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
    setShown(prev => [...prev, random]);
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

  const handleSave = useCallback(() => {
    setSaved(shown);
  }, [shown]);

  const handleSavedReset = useCallback(() => {
    setSaved([]);
  }, []);

  // newFunction
  const handleAddSaved = useCallback((newSugg) => {
    // if (!newSugg.trim()) return;
    setSaved(prev => [...prev, newSugg]);
  }, []);

  return (
    <Context.Provider value={{
      suggestions,
      shown,
      saved,
      handleRequest,
      handleReset,
      handleRemove,
      handleSave,
      handleSavedReset,
      handleAddSaved
    }}>
      {children}
    </Context.Provider>
  );
}

export function useSuggestions() {
  return useContext(Context);
}

