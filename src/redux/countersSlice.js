import { createSlice } from '@reduxjs/toolkit'

const initialCounters = [
    {
        id: "123",
        title: "Pages studied this month",
        count: 0,
    },
    {
        id: "456",
        title: "Projects created this month",
        count: 0,
    },
    {
        id: "789",
        title: "TV shows skipped this month",
        count: 0,
    },
]

export const countersSlice = createSlice({
    name: "counters",
    initialState: {
        counters: initialCounters
    },
    reducers: {
        increment: (state, action) => {
            state.counters.forEach(counter => {
                if (counter.id === action.payload.id) {
                    counter.count += 1
                }
            })
        },
        decrement: (state, action) => {
            state.counters.forEach(counter => {
                if (counter.id === action.payload.id) {
                    if (counter.count > 0) {
                        counter.count -= 1
                    }
                }
            })
        },
    }
})

export const { increment, decrement } = countersSlice.actions

export default countersSlice.reducer
