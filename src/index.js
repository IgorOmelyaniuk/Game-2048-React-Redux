import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { App } from './components/App'
import { store } from './store/configStore'
import rootReducer from './reducers/index';

render(
    <Provider store={store}>
         <App />
    </Provider>,
    document.getElementById('root')
 )

 if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }