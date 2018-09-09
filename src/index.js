import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import 'babel-polyfill';
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
