import "./App.css";

// COMPONENTS
import Container from "./components/Container";
import Header from "./components/Header";
import Todos from "./components/Todos";
import ToolBar from "./components/ToolBar";

// CONTEXT
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <>
      <div
        className={
          theme === "white"
            ? "h-screen bg-white text-black"
            : "h-screen bg-black text-white"
        }
      >
        <main className="flex flex-col gap-10">
          <Container>
            <Header></Header>
            <Todos></Todos>
            <ToolBar></ToolBar>
          </Container>
        </main>
      </div>
    </>
  );
}

export default App;
