import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { Home } from "./pages/home"
import { Colection } from "./pages/colection"
import { Forge } from "./pages/forge"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colection" element={<Colection />} />
        <Route path="/forge" element={<Forge />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
