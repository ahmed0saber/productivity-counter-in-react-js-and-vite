import { configureStore } from '@reduxjs/toolkit'
import countersReducer from './countersSlice'

export default configureStore({
    reducer: {
        counters: countersReducer
    }
})
