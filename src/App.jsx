import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className=" tablet:text-lg desktop:text-xl text-slate-900 font-body leading-relaxed">
      <Header />
      <div className="container">
        <main className="py-10 tablet:py-12 laptop:py-20 desktop:py-28 px-3 tablet:px-6 laptop:px-12 desktop:px-28">
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
