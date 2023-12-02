import { DECREMENT, INCREMENT } from './types'

export const incrementAction = (id) => {
    return {
        type: INCREMENT,
        id
    }
}

export const decrementAction = (id) => {
    return {
        type: DECREMENT,
        id
    }
}
