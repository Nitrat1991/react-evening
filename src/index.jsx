import React from 'react';
import { createRoot } from 'react-dom/client';

import './components/style/style.scss';
import App from './components/app/App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <App/>
);