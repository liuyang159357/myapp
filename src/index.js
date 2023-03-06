import { createRoot } from 'react-dom/client';
import './01/css/01.css'

import App from './02/生命周期'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <div>
      
        <App></App>
    </div>);