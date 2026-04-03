import BoxForChildren from "./components/BoxForChildren";
import Header from "./components/Header";
import Controls1 from "./components/Controls1";
import Controls2 from "./components/Controls2";
import SuggestionList from "./components/SuggestionList";
import Controls3 from "./components/Controls3";
import LimitedSavedList from "./components/SavedList";
import AddSavedSugg from "./components/AddSavedSugg";
import "./Style.css";

export default function App() {
  return (
    <div>
      <Header />

      <BoxForChildren className="ricevuti">
        <Controls1 />
        <h2>Consigli Ricevuti:</h2>
        <SuggestionList />
        <Controls2 />
      </BoxForChildren>


      <BoxForChildren className="salvati">
        <h2>Consigli Salvati:</h2>
        <LimitedSavedList />
        <Controls3 />
        <br />
        <AddSavedSugg />
      </BoxForChildren>
    </div>
  );
}