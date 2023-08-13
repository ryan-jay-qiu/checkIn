const axios = require("axios");
const mailer = require("../utils/sendEmail.js")
axios({
  url:"https://wallet.lakala.com/m/a/checkin/submitNew",
  headers : {
    'Host': 'wallet.lakala.com',
    'Accept': 'application/json, text/plain, */*',
    'Authorization': 'd3f9892d4ad04cc587b70382903a8fa8',
    'Sec-Fetch-Site': 'same-site',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Sec-Fetch-Mode': 'cors',
    'Content-Type': 'application/json',
    'Origin': 'https://i.lakala.com',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;lakala-app',
    'Referer': 'https://i.lakala.com/',
    'Connection': 'keep-alive',
    'Sec-Fetch-Dest': 'empty'
  },
    
  method: "POST",
  data:{
    signDate: '20230808214539',
    activityId: '1002201001'
  }
}
).then((res) => {

  mailer.sendMail("kalaka",res.data.message);
}).catch(res=>{
  console.log(res)
  mailer.sendMail("kalaka",res.data);
});


