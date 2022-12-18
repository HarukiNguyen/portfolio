import { Route, Routes } from 'react-router-dom';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <div className="font-body leading-relaxed text-slate-900 tablet:text-lg">
      <Header />
      <div className="layout-container">
        <main className="py-20 tablet:py-24 laptop:py-28 desktop:py-36">
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/portfolio/:project" element={<ProjectPage />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
