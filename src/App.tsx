import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import SkillsPage from "./pages/SkillPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skillspage" element={<SkillsPage />} />
    </Routes>
  );
}

export default App;
