import React from "react";
import Homepage from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./Components/Profilepage/Profilepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
