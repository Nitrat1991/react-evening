import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.sass';
import App from '../components/App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <App tab="Home"/>
);