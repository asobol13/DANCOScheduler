import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from '../components/Home.js';

// Use createRoot instead of ReactDOM.render
const rootElement2 = document.getElementById('root2');
const root2 = createRoot(rootElement2);
root2.render(<Home />);
