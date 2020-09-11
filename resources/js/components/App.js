import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from "redux";

import Products from "./Products";
import Filter from "./Filter";
import { rootReducer } from "../redux/rootReducer";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-md-8">
                        <Products/>
                    </div>
                    <div className="col-md-4">
                        <Filter/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </Provider>
);

export default App;

ReactDOM.render(<App/>, document.getElementById('app'))
