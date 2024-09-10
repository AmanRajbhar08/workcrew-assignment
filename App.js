import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SigninPage from "./../src/pages/SigninPage";
import DashboardPage from "./../src/pages/DashboardPage"; // The dashboard component
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
