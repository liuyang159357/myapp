export let show = () => {
    return (dispatch) => {
        dispatch({
            type: 'show'
        })
    }
}
export let hide = () => {
    return (dispatch) => {
        dispatch({
            type: 'hide'
        })
    }
}