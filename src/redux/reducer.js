import { SHOW_VIDEO } from './type'
const initialState = {
    data : []
}

export const reducer = (state = initialState,action) => {
    switch(action.type) {
        case SHOW_VIDEO:
            return {
                data : action.payload
            } 
        default:
            return state;
    }
}