import { STATUSCHANGE , COLORCHANGE } from "./actionTypes.js"

const initialState = {
    status: "ALL",
    colors: [],
}
const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case STATUSCHANGE:
            return {
                ...state,
                status : action.payload
            }
        case COLORCHANGE:
            const { color, changeType } = action.payload;
            switch (changeType) {
                case "added":
                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            color
                        ]
                    };
                case "removed":
                    return {
                        ...state,
                        colors: state.colors.filter(function(existingColor) {
                            return existingColor !== color;
                        })
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
}

export default reducer;