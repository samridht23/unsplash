import { Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Home from "./routes/Home";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
