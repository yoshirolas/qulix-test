
function mailListReducer (state = [], action) {
  switch (action.type) {

    case 'GET_MAIL_LIST': {

      return action.payload
    }

    default:

      return state;
  }
}

export default mailListReducer;