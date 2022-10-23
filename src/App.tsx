import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Company from "./pages/Company/Company";
import Grants from './pages/Grants/Grants';
import JoinOurTeam from "./pages/JoinOurTeam/JoinOurTeam";
import {Menu} from "./components/Menu/Menu";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Menu/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="company" element={<Company />} />
                    <Route path="grants" element={<Grants />} />
                    <Route  path="join-our-team" element={<JoinOurTeam />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
