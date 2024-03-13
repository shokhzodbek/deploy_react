import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="products/:id" element={<DetailPage />} />
        <Route path="*" element={<h1>Page does not exist</h1>} />
      </Routes>
    </>
  );
}

export default App;
