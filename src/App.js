import "./App.css";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
