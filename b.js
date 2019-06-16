exports.a = 123

exports.fn = function(){
  console.lo("ads")
}


exports.f = function(){
  const data = "";
  const url = "package.json";
  const opts = {
    method:'GET',
    //fetch中get和head方法不能设置请求body选项,否则报错
    // body:'',    body中只支持字符串

    //设置请求头
    headers:{
      "content-type":"x-www-form-urlencoded",
    },
    //不管是同源还是跨域请求都带上cookie信息
    credentials:'include'
  };

  //注意：fetch中默认的请求方式是get
  //不管服务器返回的状态是多少，fecth都不认为是失败，都执行的是then方法，不会执行catch
  //方法，需要自己进行异常抛出


  fetch(url,opts).then(res=>{
    /*
      res包含如下信息：
        headers:{}   响应头信息
        redirected:false  是否重定向
        status: 状态码
        statusText：状态描述
        type:'basic'或者'cors'     basic表示同源，cors表示是跨域
        url:表示请求的地址
        credentials:'include'   不管是同源还是跨域请求都带上cookie信息


      注意：res是一个Response对象，它的原型上__proto__有许多方法
        arrayBuffer:
        blob:
        clone:
        json:
        text:
        。。。。。
        基于这些方法可以快速的将从服务器返回的数据解析出来

    */
    console.log(res)

  }).catch(msg=>{
    console.log(msg)
  })
}

/*

fetch("https://www.easy-mock.com/mock/5cf9be39fa593a29decba995/example/proxy",
  {
  header:{"content-type":"application/html"
}
}).then(res=>{console.log(res)})

返回的res
  body: (...)
  bodyUsed: false
  headers: Headers
  __proto__: Headers
  ok: true
  redirected: false
  status: 200
  statusText: "OK"
  type: "cors"

*/
