import { createStore } from "redux"
import countersReducer from "./reducers/countersReducer"

const store = createStore(countersReducer)

export default store
