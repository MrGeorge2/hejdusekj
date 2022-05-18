import { Layout } from "./components/layout/layout";
import { SnakeGame } from "./components/snakeGame/snake";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SnakeGame/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
