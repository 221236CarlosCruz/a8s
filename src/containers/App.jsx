import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pruebas from "../pages/Pruebas";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pruebas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;