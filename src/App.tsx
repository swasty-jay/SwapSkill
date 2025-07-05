import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import SkillDetailPage from "./pages/SkillDeatilsPage";
import SkillListingPage from "./pages/SkillListItem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SkillListingPage" element={<SkillListingPage />} />
      <Route path="/skills/:id" element={<SkillDetailPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
