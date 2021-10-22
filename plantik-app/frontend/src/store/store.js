import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/rootReducer';
// import { authReducer } from '../reducers/authReducer';
// import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const reducers = combineReducers({
//     auth: authReducer,
//     // ui: uiReducer
// });

// composeEnhancers(
//     applyMiddleware( thunk )
export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware( thunk )
    )
    
);
