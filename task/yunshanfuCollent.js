const axios = require("axios")
const mailer = require("../utils/sendEmail.js")
axios({
  url:"https://ut.xiaojukeji.com/ut/welfare/api/action/dailySign?wsgsig=dd03-TVMWLw5kbU3BKkMGhW6D9OMrAEuGLakAiiAcEIEWAEu0IeAHqfPG9YMnak30IUICkbEJcOxl9FgE8hF7Uc1cEH2i9Eo8IE6BhfddFOYs9koEHreEUtI7a1Fn9rJa2AB7%2FXlGgH1",
  headers : {
    "Host": 'ut.xiaojukeji.com',
    "Connection": 'keep-alive',
    'Content-Length': '826',
    'didi-header-rid': '2dc0c09664d24f7ebd3b3846be89c8e0',
    'source-type': '15',
    'didi-header-hint-content': '{"lang":"zh-CN","Cityid":11}',
    'content-type': 'application/json',
    'secdd-authentication': '0aa8761ffc9bee1477ed396728b1002b0de0829885899659fe341930b2b90a4a02b4c556edf276fc76a02a5e2418e344638485d58901000001000000',
    'secdd-challenge': '3|v1.1.0||||||',
    'Accept-Encoding': 'gzip,compress,br,deflate',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.38(0x1800262c) NetType/WIFI Language/zh_CN',
    "Referer": 'https://servicewechat.com/wxaf35009675aa0b2a/714/page-frame.html'
  },
  method: "POST",
  data: {"lang":"zh-CN","token":"IrUdMMPIRdgMCaSPkMyYcZ6inFHQRs-18drG7KYWpxgkzDmuwlAMQNG93NqK7PhN9m7-hzA0DwlEFWXvFKlOd3amkviiiyJMI02YK-lVNYTppPUaXk2HhnkRZiFVmJUE4e_kn1wjtI0yenXzFsKVDGEjdz6v7_uykVVV4xBupLWwqqWUItxJbLiv5t57Q3ic7ZPU4xcAAP__","access_key_id":9,"appversion":"6.6.64","channel":1100000002,"_ds":"","lat":"32.06522542317708","lng":"118.66510932074652","platform":"mp","env":"{\"cityId\":\"11\",\"token\":\"IrUdMMPIRdgMCaSPkMyYcZ6inFHQRs-18drG7KYWpxgkzDmuwlAMQNG93NqK7PhN9m7-hzA0DwlEFWXvFKlOd3amkviiiyJMI02YK-lVNYTppPUaXk2HhnkRZiFVmJUE4e_kn1wjtI0yenXzFsKVDGEjdz6v7_uykVVV4xBupLWwqqWUItxJbLiv5t57Q3ic7ZPU4xcAAP__\",\"longitude\":\"118.66510932074652\",\"latitude\":\"32.06522542317708\",\"appid\":\"30012\",\"fromChannel\":\"2\",\"wxScene\":1089,\"sceneId\":1089,\"openId\":\"oJJUI0cMYMPvfVAKkn9NH0FJgYIQ\"}","dchn":"W0dzOxO"}
}
).then((res) => {
  console.log("yunshanfu",res.data)
  mailer.sendMail("yunshanfu",res.data);
}).catch(res=>{
  console.log(res)
  mailer.sendMail("yunshanfu",res.data);
});


