import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middleWare.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { persistor };
export default store;