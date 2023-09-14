import React from 'react';
import { createRoot } from 'react-dom/client';
import Maintenance from '../components/MxPage.js';

// Use createRoot instead of ReactDOM.render
const rootElement4 = document.getElementById('root4');
const root4 = createRoot(rootElement4);
root4.render(<Maintenance />);