// const initialState = {
//   user: null,
//   access_token: null,
// }


function mailListReducer (state = [], action) {
  switch (action.type) {

    case 'GET_MAIL_LIST': {
    	console.log('HERE')
    	console.log(action.payload.length)
      return action.payload
    }

    default:
    	console.log('default')
      return state;
  }
}

export default mailListReducer;