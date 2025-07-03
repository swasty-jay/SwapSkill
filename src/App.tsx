import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import SkillListingPage from "./pages/SkillListingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skilllistingpage" element={<SkillListingPage />} />
    </Routes>
  );
}

export default App;
