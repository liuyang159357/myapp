
function ListReducer(state = { 
    list:[]
}, action={}) {
    let newState = { ...state }
    switch (action.type) {
        case 'change-list':
            newState.list = action.props
            break;
     
        default:
            return state
    }
    return newState

}
export default ListReducer