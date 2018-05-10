import axios from 'axios';

export const asyncGetMailList = (access_token) => (dispatch) => {
  const config = {
    headers: { 'Authorization': 'Bearer' + access_token }
  }
  axios.get('https://www.googleapis.com/gmail/v1/users/112011855349668134552/messages', config)
  .then(res => {
    console.log(res.data)
    // const data = res.data;
    // return dispatch({
    //   type: 'GET_MAIL_LIST',
    //   payload: data
    // })
  })
  .catch(err => console.log(err))
}