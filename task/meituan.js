// import axios from "axios";
const axios = require("axios")
const a = {
  url:"https://i.meituan.com/evolve/signin/signpost/100219",
  headers: {
    'Host': 'i.meituan.com',
    'X-Titans-User': '',
    'Accept': '*/*',
    'Sec-Fetch-Site': 'same-site',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Sec-Fetch-Mode': 'cors',
    'token': 'AgGzI4Dzq7qAAyKDV0TCqYST6ESohh5H1AokcJ1FL9lXLstt1qrnH4RWnjBetCrPQ0otshbxPO2bFAAAAAD1GQAAoHwOdfHyT1UgiYihiuxq6u5c0GU2i7oeGYRVLz6AjLIL9PhtTMaIN_P88sx0yQOH',
    'Origin': 'https://cube.meituan.com',
    'Content-Length': "7285",
    'User-Agent': 'EHC/3.15.0/ehc_group_ios_classic/94 Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TitansX/20.0.1.old KNB/1.0 iOS/16.6 meituangroup/com.meituan.imeituan/12.10.402 meituangroup/12.10.402 App/10110/12.10.402 iPhone/iPhone11 WKWebView',
    'Referer': 'https://cube.meituan.com/',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Sec-Fetch-Dest': 'empty',
  },
  method: "POST",
  data: {"riskRequest":"{\"fingerprint\":\"i2HKpOmsirDPavelVfQBZGhGhrXZs3bfUIQEEtmPQWbTow1jPLgxq65Bsr01mSyKOdWoRksBfIB3XjtebBO478gKK2yPZXnzmfOx4qGkMTUD+5tQg1+MZ2TGfS5/OoIIgf4pmgSqirYFmkMrXwLfhofUiBHQg23mEFfLbTUX6d1XttzunQ+qDIExpq5Sb7Axg+3iZiH4g7AxtkrpkTedsmK/AoIQFKhA5FpTqRTg5Wb98sQIEav4DseKt5jWVdaOEkE/9/CD+RbriXcDcNb8IVI7Em6QWs52UlimFlT8HMiRJzn/a2cGxXeFtA4KlWtCAMqm+wytLa1PfX3Zp8SVySQ5MNmSMFo04Zv5yUmANSlNWplnjRogg0ZCDOdTq+DXRTmDUFCFwzn8Cm1JxP7lz0SKScw13+Iw7TZKHgIr+McYLTp/k1FiU5KXRVQJPL0yChXyVSMS1cuKAt7bWSGU+THNKVgHqxR3VJiRcOoBRTKaIVYFb3dtZRbp57xR5+kx8ZegmOzrpZzzv+f+Y0zib5BkPaXc2uTra1VRCu3SyTrzRHdPhw18XAFasAwvwMMU3sIHykKg16/qACQMSxQ98nLjTWEJfAVB7+0u9EfDbhNmxkWjgPIR271m/UEvcHsJaOHsmqLgHHQoYTp4dC0zd8qx8yG1rThDGHaQ5KfWA/Ui/Xt/v26RIz19q8At2mvojJfbztUEtEad8cstvcusPZC7AfRJbtyIUikBWjussVVEgjm413H0jKcQ3V5yZc5LYQPWjZ3h2FI3c8MKRC4o2P/Xj4VIxw6QKUfkFEJheN7+x4641WSd13WRVkFDK1SSRDaIF1yKtUnuLVolUdFtf4ZlcFcYPz42C80cb9jP9Q+LrkEU8Rs8WYEaBZgVPM2dgRvFkIUAVBHVdxq7w55aLPJxvbrjpWlRtou9YjTIp2lzjP7FKqloQ3iwNwN/8MgJo9F09KzYIMM4j4S820LGNcOyp3jr4cWAAx5xs+SrzzlYvc8rUOZIYuhUrevnWSKNRDPad/1NdWwGjwbOuglawEUANGFq0JaXpRLXucYR9VoTVarmfXzFN86eabN8dJJ/1kkzbr4jmdbo49ucjSd7xYJq6SXXsfmSWdv4KZjLarf/7y3gsPGbSCE2YoSdLOpWnbEyXoDaKyCf6Xkc7vvtkcsFZKetaG3HwnYhZa0MwPlRKAaPoVylEIaJ2r2o4hr2pU9S6wH7Os+s1A/OsxMd9TYxPB2W7pxZKTEJxOGKKb5Aha2NSdZvjZy6yLg+dKn8tbGgl+8344jbqyhnF0Rtxv26Ot6pfofnt+JTJujOvell1X257XlVbntdBvtjw49ZOuJgbVqa57p2aCZ+NoL0H4PKLBeoKUvcX5ldO49iwzQP/gR8lyao+1gllxCi6GeAV8+5nhaF2UobaAJz+Gh289UDUu/ZmcvFSak7oLAn6ccop+83TJNsSXt+jKlGH2WA\",\"uuid\":\"00000000000009A22F2E49FD149EE867866EF09B1434EA162871873552094900\",\"version\":\"12.10.402\",\"platform\":5,\"app\":\"0\",\"campaignPlatform\":\"14\",\"campaignType\":\"1\",\"h5Fingerprint\":\"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\"}","code":""},
}
axios(a
).then((res) => {
  console.log("meituan",res.data)
}).catch(res=>{
  console.log(res)
});


