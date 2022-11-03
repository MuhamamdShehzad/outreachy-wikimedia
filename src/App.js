import Home from "./pages/home/Home";
import Tasks from "./pages/tasks/Tasks";
import Dashboard from "./pages/dashboard/Dashboard";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
