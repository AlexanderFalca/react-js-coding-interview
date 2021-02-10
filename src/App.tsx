import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing/index';

const App: React.FC = () => (
    <BrowserRouter>
    <Landing />
    </BrowserRouter>
);

export default App;
