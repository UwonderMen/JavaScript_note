let dns = require("dns");

// dns.lookup("www.wangto.top",(err,address,family)=>{
//   console.log(address,family)
//   console.log(err)
// })


dns.resolve4("www.baidu.com",(err,address)=>{
  if(err) throw err
  console.log(address)
 //   dns.reverse(address[0], (err, hostnames) => {
 //     if (err) {
 //       throw err;
 //     }
 //     console.log(`IP 地址 ${a} 逆向解析到域名: ${JSON.stringify(hostnames)}`);
 // });
})
