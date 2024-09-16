import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/Martinez_F_40300308_CV_En.pdf"
                    element={<a href="/Martinez_F_40300308_CV_En.pdf" target="_blank" rel="noopener noreferrer">Download English CV</a>}
                />
                <Route
                    path="/Martinez_F_40300308_CV_Fr.pdf"
                    element={<a href="/Martinez_F_40300308_CV_Fr.pdf" target="_blank" rel="noopener noreferrer">Download French CV</a>}
                />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
