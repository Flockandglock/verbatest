import { Header } from "./components/Header/Header";

import { TasksList } from "./components/TasksList/TasksList";
import { Filter } from "./components/Filter/Filter";

import "./App.css";


const App = () => {
  return (
    <div className="app">
      <Header/>
      <Filter/>
      <TasksList/>
    </div>
  )
}

export default App
