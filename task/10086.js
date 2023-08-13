const axios = require("axios")
axios({
  url:"https://wx.10086.cn/qwhdhub/api/mark/do/mark",
  headers : {
    'Host': 'wx.10086.cn',
    'Accept': '*/*',
    'x-requested-with': 'XMLHttpRequest',
    'Sec-Fetch-Site': 'same-origin',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Sec-Fetch-Mode': 'cors',
    'Content-Length': 2,
    'Content-Type': 'application/json;charset=UTF-8',
    'Origin': 'https://wx.10086.cn',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.38(0x1800262c) NetType/WIFI Language/zh_CN miniProgram/wx43aab19a93a3a6f2',
    'Referer': 'https://wx.10086.cn/qwhdhub/qwhdmark/1021122301?ys=&yx=&touch_id=&wmhToken=Z1NCSTRsczVwanYyVTRLL3o5akZ5QXFPQUc5NGxaU3dxd2ZMcjZUKzB2dGdLSDBDV280djFzdVZReWoxajFaMG5pb1VhaG1vVnMvdwo0cWl0TU50K0R2VS9ZOE4yUGczVXc2NW81cGloTTJJPQ==',
    'Connection': 'keep-alive',
    'Sec-Fetch-Dest': 'empty',
    'Cookie': "SESSION=afa652a7-15de-4fe4-a84c-2ff7d7e45ced; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22189d57f9bf1102e-090a891ae7d163-8127e0b-370944-189d57f9bf21849%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fwx.10086.cn%2Fqwhdhub%2Fqwhdmark%2F1021122301%3Fys%3D%26yx%3D%26touch_id%3D%26wmhToken%3DZ1NCSTRsczVwanYyVTRLL3o5akZ5QXFPQUc5NGxaU3dxd2ZMcjZUKzB2dGdLSDBDV280djFzdVZReWoxajFaMG5pb1VhaG1vVnMvdwo0cWl0TU50K0R2VS9ZOE4yU%22%7D%2C%22%24device_id%22%3A%22189d57f9bf1102e-090a891ae7d163-8127e0b-370944-189d57f9bf21849%22%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfYW5vbnltb3VzX2lkIjoiMTg5ZDU3ZjliZjExMDJlLTA5MGE4OTFhZTdkMTYzLTgxMjdlMGItMzcwOTQ0LTE4OWQ1N2Y5YmYyMTg0OSIsIiRpZGVudGl0eV9jb29raWVfaWQiOiIxODlkNTgwYjI5ZTQ0Ni0wMjkwZDZhMWY1MmYyMDYtODEyN2UwYi0zNzA5NDQtMTg5ZDU4MGIyOWYxOWMzIn0%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%7D; WT_FPC=id=2bda0c99a6e33f48cb01691504076992:lv=1691504123944:ss=1691504076992"
  },
    
  method: "POST",
  // data: {

  // }
}
).then((res) => {
  console.log("10086",res.data)
}).catch(res=>{
  console.log(res)
});


