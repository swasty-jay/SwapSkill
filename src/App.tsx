import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import SkillDetailPage from "./pages/SkillDeatilsPage";
import SkillListingPage from "./pages/SkillListItem";
import NotFound from "./pages/NotFound";
import AppLayOut from "./components/Layout/AppLayOut";

function App() {
  return (
    <Routes>
      <Route element={<AppLayOut />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/SkillListingPage" element={<SkillListingPage />} />
        <Route path="/skills/:id" element={<SkillDetailPage />} />
      </Route>
      {/*  routes not needed within the layout */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
