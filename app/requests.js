import React from 'react';
import { createRoot } from 'react-dom/client';
import Request from '../components/requestsPage.js';

// Use createRoot instead of ReactDOM.render
const rootElement3 = document.getElementById('root3');
const root3 = createRoot(rootElement3);
root3.render(<Request />);