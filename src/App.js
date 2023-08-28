import logo from "./logo.svg";
import PdfPreview from "./Components/PdfPreview";
import "./App.css";

function App() {
  const pdfUrl = "./example.pdf";

  return (
    <div className="App">
      <header className="App-header">
        <div className="app">
          <h1>PDF Preview Example</h1>
          <PdfPreview pdfUrl={pdfUrl} />
        </div>
      </header>
    </div>
  );
}

export default App;
