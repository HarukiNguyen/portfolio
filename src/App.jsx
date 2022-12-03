import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="container px-3 text-slate-900 font-body leading-relaxed">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:project" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
