import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Company from "./pages/Company/Company";
import Grants from './pages/Grants/Grants';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="company" element={<Company />} />
                    <Route path="grants" element={<Grants />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
