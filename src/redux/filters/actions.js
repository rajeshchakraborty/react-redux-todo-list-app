import { STATUSCHANGE , COLORCHANGE} from "./actionTypes"

export const statuschange = (status) => {
    return{
        type: STATUSCHANGE,
        payload : status
    }
}

export const colorchange = (color, changeType ) => {
    return{
        type: COLORCHANGE,
        payload: {
            color, 
            changeType
        }
    }
}
