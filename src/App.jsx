import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import BookDetail from "./book/BookDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/2" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;