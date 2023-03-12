
function reducer(state = { show: true }, action={}) {
    let newState = { ...state }
    switch (action.type) {
        case 'hide':
            newState.show = false
            break;
        case 'show':
            newState.show = true
            break
        default:
            return state
    }
    return newState

}
export default reducer