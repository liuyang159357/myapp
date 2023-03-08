import { createRoot } from 'react-dom/client';
import './01/css/01.css'

import App from './03/router'
import Tabbar from './03/components/Tabbar'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <div>
      
        <App>
        <Tabbar></Tabbar>

        </App>
    </div>);