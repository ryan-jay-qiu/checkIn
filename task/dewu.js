const axios = require("axios")
const mailer = require("../utils/sendEmail.js")
axios({
  url:"https://app.dewu.com/hacking-game-center/v1/sign/sign?sign=fe26befc49444d362c8f17463630bdba",
  headers : { 
        "Host": "app.dewu.com",
        "isRoot": 0,
        "appid": "h5",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/duapp/5.19.1",
        "deviceTrait": "iPhone",
        "cookieToken": "d41d8cd9|169462840|1689724101|292ae55792ddc816",
        "emu": 0,
        "isProxy": 0,
        "Cookie":  "duToken=d41d8cd9|169462840|1689724101|292ae55792ddc816;  sajssdk_2015_cross_new_user=1;  sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22189d5930d2d45c-06140436c82a23c-1b3d1a3b-370944-189d5930d2e19e8%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg5ZDU5MzBkMmQ0NWMtMDYxNDA0MzZjODJhMjNjLTFiM2QxYTNiLTM3MDk0NC0xODlkNTkzMGQyZTE5ZTgifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22189d5930d2d45c-06140436c82a23c-1b3d1a3b-370944-189d5930d2e19e8%22%7D;  x-auth-token=Bearer eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTE1MDUzNzIsImV4cCI6MTcyMzA0MTM3MiwiaXNzIjoiOUExNTA0RUEtRjQ0RS00MUUxLTkxQTAtMkJFN0I3Mjk1RTIxIiwic3ViIjoiOUExNTA0RUEtRjQ0RS00MUUxLTkxQTAtMkJFN0I3Mjk1RTIxIiwidXVpZCI6IjlBMTUwNEVBLUY0NEUtNDFFMS05MUEwLTJCRTdCNzI5NUUyMSIsInVzZXJJZCI6MTY5NDYyODQwLCJ1c2VyTmFtZSI6Iuecieavm-eyl-a2gum4pmZueSIsImlzR3Vlc3QiOmZhbHNlfQ.eax7mdMg3YFpoiWmWlqUf8u9kCvMGTt50NaEGdtFsjCrBC2UhIPqbFyuWaCvDHDTdgHPb-CuexcXs_6QXGyYG4sqX3LxQL1pz02aKwpZ4KekbQZjJ3ZvTwWqeak2wo7GKhL5OqtvKmpo5MpYXxZCiEAw08mKSup0OvL8Dlev7BltFiveelOTlDYK_1Mla1K6eXQuN04MuYhX1KNwPGiXDgZryI_68W5Ae2sueqPCguhO1FTBmyO0nBzczB37CCwkMYzX5Sc-LLo1OeaZmu2BdGynTYQgff8dNOfuQg8IJqWEM1fBpMUDl7b-KjPAjYht_EmIKXi57_11tgOp2eRb7w; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%22189d5930d2d45c-06140436c82a23c-1b3d1a3b-370944-189d5930d2e19e8%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22identities%22%3A%22eyIkaWRlbnRpdHlfY29va2llX2lkIjoiMTg5ZDU5MzBkMmQ0NWMtMDYxNDA0MzZjODJhMjNjLTFiM2QxYTNiLTM3MDk0NC0xODlkNTkzMGQyZTE5ZTgifQ%3D%3D%22%2C%22history_login_id%22%3A%7B%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D%2C%22%24device_id%22%3A%22189d5930d2d45c-06140436c82a23c-1b3d1a3b-370944-189d5930d2e19e8%22%7D; sajssdk_2015_cross_new_user=1",
        "Referer": "https://m.dewu.com/",
        "imei": "",
        "channel": "App Store",
        "appVersion": "5.19.1",
        "uuid": "9A1504EA-F44E-41E1-91A0-2BE7B7295E21",
        "Origin": "https://m.dewu.com",
        "ua": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/duapp/5.19.1",
        "Sec-Fetch-Dest": "empty",
        "shumeiId": "202005300727267cf5890f1531efe23d1f0ac0a43ebc4b01c9e3753b8d2029",
        "Sec-Fetch-Site": "same-site",
        "x-auth-token": "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTE1MDUzNzIsImV4cCI6MTcyMzA0MTM3MiwiaXNzIjoiOUExNTA0RUEtRjQ0RS00MUUxLTkxQTAtMkJFN0I3Mjk1RTIxIiwic3ViIjoiOUExNTA0RUEtRjQ0RS00MUUxLTkxQTAtMkJFN0I3Mjk1RTIxIiwidXVpZCI6IjlBMTUwNEVBLUY0NEUtNDFFMS05MUEwLTJCRTdCNzI5NUUyMSIsInVzZXJJZCI6MTY5NDYyODQwLCJ1c2VyTmFtZSI6Iuecieavm-eyl-a2gum4pmZueSIsImlzR3Vlc3QiOmZhbHNlfQ.eax7mdMg3YFpoiWmWlqUf8u9kCvMGTt50NaEGdtFsjCrBC2UhIPqbFyuWaCvDHDTdgHPb-CuexcXs_6QXGyYG4sqX3LxQL1pz02aKwpZ4KekbQZjJ3ZvTwWqeak2wo7GKhL5OqtvKmpo5MpYXxZCiEAw08mKSup0OvL8Dlev7BltFiveelOTlDYK_1Mla1K6eXQuN04MuYhX1KNwPGiXDgZryI_68W5Ae2sueqPCguhO1FTBmyO0nBzczB37CCwkMYzX5Sc-LLo1OeaZmu2BdGynTYQgff8dNOfuQg8IJqWEM1fBpMUDl7b-KjPAjYht_EmIKXi57_11tgOp2eRb7w",
        "Content-Length": 2,
        "deviceId": "9A1504EA-F44E-41E1-91A0-2BE7B7295E21",
        "platform": "h5",
        "Connection": "keep-alive",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "SK": "9JiEGJ2UABBYN3tV9V5R8iFdbPVO507lhnDsBoDGRwVxgwuxl5SDSMGKDKr2Rh2I64kAzUEK8wSJTPpp3m7oT3gbq81q",
        "Accept": "*/*",
        "Content-Type": "application/json",
        "duToken": "d41d8cd9|169462840|1689724101|292ae55792ddc816",
        "Accept-Encoding": "gzip, deflate, br",
        "Sec-Fetch-Mode": "cors"
    },
    data:{},
  method: "POST",
}
).then((res) => {
  console.log("dewu",res.data)
  mailer.sendMail("kalaka",res.data.msg);
}).catch(res=>{
  console.log(res)
});
