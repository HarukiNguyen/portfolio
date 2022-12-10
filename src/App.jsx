import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="tablet:text-lg text-slate-900 font-body leading-relaxed">
      <Header />
      <div className="grid-container">
        <main className="py-20 tablet:py-24 laptop:py-28 desktop:py-36">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:project" element={<ProjectPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
