import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      {/* NavBar */}
      <NavBar />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/download"
          element={
            <>
              <Download />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>

      {/* Todo: Footer */}
    </>
  );
}

export default App;
