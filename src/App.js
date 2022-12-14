import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation"
import Detail from "./routes/Detail";
import Home from "./routes/Home";

import "./App.css"

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Navigation />
            <Routes>
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/:sort" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )    
}

export default App;