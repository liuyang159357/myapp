import { createRoot } from 'react-dom/client';
import './01/css/01.css'
import 'antd/dist/reset.css';
import App from './components/Count'
import { Provider } from 'react-redux'
import store from './redux/store'
// import { PersistGate } from 'redux-persist/integration/react'


import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      {/* <PersistGate loading={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
    {/* <App></App> */}
  </ConfigProvider>);