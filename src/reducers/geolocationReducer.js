function geolocationReducer (state = '', action) {
  switch (action.type) {

    case 'GET_GEOLOCATION': {
    	console.log(action.payload)

      return action.payload
    }

    default:

      return state;
  }
}

export default geolocationReducer;