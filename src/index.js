import { createRoot } from 'react-dom/client';
import APP from './01/class'
import Fn from './01/fn'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <div>
        <APP></APP>
        <Fn></Fn>
        
    </div>);