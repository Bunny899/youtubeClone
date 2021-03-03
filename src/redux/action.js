import { SHOW_VIDEO } from './type'

export const showVideo = (data) => {
    return {
        type : SHOW_VIDEO,
        payload : data
    }
}