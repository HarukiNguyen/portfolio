import Header from "./layouts/Header";
import Content from "./layouts/Content";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="container px-3 text-slate-900 font-body leading-normal ">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
