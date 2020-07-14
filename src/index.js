import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './redux/rootreducer';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
)));
const app = (
    //передаем с помощью провайдера store
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(
    app,
  document.getElementById('root')
);
