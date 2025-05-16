import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "../Layouts/PageLayout";
import HomePage from "../pages/HomePage";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
