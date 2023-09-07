import React from 'react';
import { createRoot } from 'react-dom/client';
import Page1 from '../components/Page1.js';

// Use createRoot instead of ReactDOM.render
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Page1 />);
