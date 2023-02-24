import { createStore, combineReducers } from "redux";

import predectionsReducer from "./Predictions/reducer";

const reducers = combineReducers({
    predection: predectionsReducer
})

const store = createStore(reducers)

export default store