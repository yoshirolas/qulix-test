
function mailListReducer (state = [], action) {
  switch (action.type) {

    case 'GET_MAIL_LIST': {

      return action.payload
    }

    case 'GET_SEARCHED_MAIL_LIST': {
      
      let newState = [];
      action.payload.forEach((item) => {
        const searchedMail = state.find(mail => mail.data.id === item.id);
        if (searchedMail) newState.push(searchedMail)
      })

      return newState;
    }

    default:

      return state;
  }
}

export default mailListReducer;