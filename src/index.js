import { createRoot } from 'react-dom/client';
import './01/css/01.css'

import App from './03/App'
import  './03/views/css/App.css'
import { Provider} from 'react-redux'
import store from './03/redux/store'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <div>
      <Provider store={store}>
      <App/>
      </Provider>
    </div>);