import { INCREMENT, DECREMENT } from "../actions/types"

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

function countersReducer(state = { counters: initialCounters }, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            counters: state.counters.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        count: item.count + 1
                    }
                }

                return item
            })
        }
    }

    if (action.type === DECREMENT) {
        return {
            ...state,
            counters: state.counters.map(item => {
                if (item.id === action.id) {
                    if (item.count > 0) {
                        return {
                            ...item,
                            count: item.count - 1
                        }
                    }
                }

                return item
            })
        }
    }

    return state
}

export default countersReducer