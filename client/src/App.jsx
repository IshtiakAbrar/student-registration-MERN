import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SavePage from "./pages/SavePage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/save-page'} element={<SavePage/>}/>
                <Route path={'/details'} element={<DetailsPage/>}/>
            </Routes>

        </BrowserRouter>
    );
};

export default App;