import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import ToolBar from "./components/ToolBar";

function App() {
  return (
    <>
      <main className="flex flex-col gap-10 items-center">
        <Header></Header>
        <Todos></Todos>
        <ToolBar></ToolBar>
      </main>
    </>
  );
}

export default App;
