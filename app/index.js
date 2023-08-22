// app/index.js

import React from 'react'; // Import createRoot
// import { createRoot } from 'react';
import Page1 from '../components/Page1.js'; // Import the main component
import '../resources/index.css';

// Use createRoot instead of ReactDOM.render
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<Page1 />);
