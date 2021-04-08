// import axios from 'axios';

//let prefix = 'http://10.172.13.245:3002';
let SERVER_PREFIX = 'http://localhost:3000/';

// let prefix = process.env.prefix;
// let SERVER_PREFIX = process.env.SERVER_PREFIX;
let API = {}

// API.server_prefix = SERVER_PREFIX;
// API.prd_prefix = prefix;
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


API.submit = async (param) => {
  console.log(param)
  let raw = JSON.stringify(param)
  // let raw = JSON.stringify({
  //   "eventID": 1,
  //   "phone": "13918960666",
  //   "wechat": "nick_zheng888",
  //   "email": "nickzhengyiming2@gmail.com",
  //   "company": "nike",
  //   "assessment": "[[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]]"
  // });
  
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(SERVER_PREFIX+"assessment",requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

export default API
