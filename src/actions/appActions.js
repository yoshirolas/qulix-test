import axios from 'axios';

export const asyncGetMailList = (access_token) => (dispatch) => {
  const config = {
    headers: { 'Authorization': 'Bearer ' + access_token }
  }
  let mailList = [];
  axios.get('https://content.googleapis.com/gmail/v1/users/me/messages?key=AIzaSyCsOWMngYW5LNRKPraFgYyyD0KEqrSv39s', config)
  .then(res => {
    console.log(res.data.messages)
    res.data.messages.forEach(message => {
      const messageId = message.id;
      // console.log(messageId)
      axios.get(`https://content.googleapis.com/gmail/v1/users/me/messages/${messageId}?key=AIzaSyCsOWMngYW5LNRKPraFgYyyD0KEqrSv39s`, config)
      .then(res => {
        mailList.push(res)
      })
    })
  })
  .then(res => {
    setTimeout(function(){
      console.log(mailList);
      return dispatch({
        type: 'GET_MAIL_LIST',
        payload: mailList
      }) 
    }, 2000)
  })
  .catch(err => console.log(err))
}