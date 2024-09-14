import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { Home } from "./pages/home"
import { Colection } from "./pages/colection"
import { Forge } from "./pages/forge"
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/reset.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colection" element={<Colection />} />
          <Route path="/forge" element={<Forge />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
