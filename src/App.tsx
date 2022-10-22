import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Company from "./pages/Company/Company";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="company" element={<Company />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
