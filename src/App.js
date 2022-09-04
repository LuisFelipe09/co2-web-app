import { Route, Routes } from "react-router-dom";
import CreateProject from "./views/CreateProject";
import Home from "./views/home";
import ProjectList from "./views/ProjectsList";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/projects" exact element={<ProjectList/>} />
      <Route path="/create-project" exact element={<CreateProject/>} />
    </Routes>
  );
}

export default App;
