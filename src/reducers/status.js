const status = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_VIEW': 
      return {
        ...state
        }
    default:
      return state
  }
}
export default status;