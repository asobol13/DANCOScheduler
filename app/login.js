import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from '../components/InitialLogin.js';

// Use createRoot instead of ReactDOM.render
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Login />);