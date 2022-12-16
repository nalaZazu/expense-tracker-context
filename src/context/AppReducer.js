export default (state, action) => {
    switch (action.type) {
        case 'USER_ADD':
            return {
                ...state,
                transcation: [action.payload, ...state.transcation]
            }
        case 'USER_DELETE':
            return {
                ...state,
                transcation: state.transcation.filter(transcation => transcation.id !== action.payload)
            }
        // case 'USER_EDIT':
        //     {
        //         return {
        //             ...state,
        //             transcation: state.transcation.find((transcation) => transcation.id == action.payload)
        //         }
        //     }
        default:
            return state
    }

}