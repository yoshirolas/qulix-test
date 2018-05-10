import axios from 'axios';

let access_token_gl = null;
const apiKey = 'AIzaSyCsOWMngYW5LNRKPraFgYyyD0KEqrSv39s';

export const asyncGetMailList = (access_token) => (dispatch) => {
  access_token_gl = access_token;
  const config = {
    headers: { 'Authorization': 'Bearer ' + access_token_gl }
  }
  let mailList = [];
  axios.get(`https://content.googleapis.com/gmail/v1/users/me/messages?key=${apiKey}`, config)
  .then(res => {
    res.data.messages.forEach(message => {
      const messageId = message.id;
      axios.get(`https://content.googleapis.com/gmail/v1/users/me/messages/${messageId}?key=${apiKey}`, config)
      .then(res => {
        mailList.push(res);
      })
    })
  })
  .then(res => {
    setTimeout(function(){
      return dispatch({
        type: 'GET_MAIL_LIST',
        payload: mailList
      }) 
    }, 3000)
  })
  .catch(err => console.log(err))
}


export const searchByMailList = (searchQuery) => (dispatch) => {
  const config = {
    headers: { 'Authorization': 'Bearer ' + access_token_gl },
  }
  axios.get(`https://content.googleapis.com/gmail/v1/users/me/messages?q=${searchQuery}&key=${apiKey}`, config)
  .then(res => {
    const resultSizeEstimate = res.data.resultSizeEstimate;
    const searchQueryResult = res.data.messages;
    if (resultSizeEstimate === 0) return
    return dispatch({
      type: 'GET_SEARCHED_MAIL_LIST',
      payload: searchQueryResult
    })
  })
  .catch(err => console.log(err))
}