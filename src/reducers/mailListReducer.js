const initialState = {
  user: null,
  access_token: null,
}


function mailListReducer (state = initialState, action) {
  switch (action.type) {

    case 'GET_MAIL_LIST': {
      return action.payload
    }

    default:
      return state;
  }
}

export default mailListReducer;