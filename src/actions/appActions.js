import axios from 'axios';


export const asyncGetMailList = (access_token, searchQuery = '') => (dispatch) => {

  const config = {
    headers: { 'Authorization': 'Bearer ' + access_token }
  }

  let mailList = [];

  axios.get(
    `https://content.googleapis.com/gmail/v1/users/me/messages?q=${searchQuery}`,
    config
  )
  .then(res => {
    const resultSizeEstimate = res.data.resultSizeEstimate;
    if (resultSizeEstimate === 0) return;
    
    return res.data.messages.forEach(message => {
      const messageId = message.id;
      axios.get(
        `https://content.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
        config
      )
      .then(res => {
        return mailList.push(res);
      })
    })
  })
  .then(res => {
    setTimeout(function(){
      return dispatch({
        type: 'GET_MAIL_LIST',
        payload: mailList
      }) 
    }, 1000)
  })
  .catch(err => console.log(err))
}