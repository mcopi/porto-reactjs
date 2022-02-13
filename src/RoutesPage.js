import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutPage from "./LayoutPage";
import Home from "./Home";
import Details from "./Details";
import { ListProvider } from './ListContext';

const RoutesPage = () => {
    return (
        <>
            <Router>
                <ListProvider>
                    <Routes>
                        <Route exact path="/" element={<LayoutPage content={<Home />} />} />
                    </Routes>
                    <Routes>
                        <Route exact path="/:id" element={<LayoutPage content={<Details />} />} />
                    </Routes>
                </ListProvider>
            </Router>
        </>
    )
}

export default RoutesPage

