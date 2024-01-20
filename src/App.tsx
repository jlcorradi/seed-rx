import SpaTemplate from "./SpaTemplate.tsx";
import HomeView from "./views/HomeView.tsx";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutView from "./views/AboutView.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SpaTemplate />}>
        <Route path="/home" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="" element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  );
}

export default App;
