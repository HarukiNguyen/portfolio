import { Route, Routes } from "react-router-dom";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <div className="container px-3 text-slate-900 font-body leading-relaxed">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
