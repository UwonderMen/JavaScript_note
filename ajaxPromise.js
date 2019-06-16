
//调用方式:
/*
  ajaxPrmomise({
  url:,
  method:,
  headers:{}
}).then(res=>{})
*/

;(function(window){
  //设置默认的参数配置项
  let _default = {
    url:'',
    baseURL:'',
    method:'GET',
    params:null, //get请求基于问号传参方式传递给服务器的内容
    headers:{},
    timeout:500,
    dataType:'json',
    data:null,  //post请求基于请求主体传参方式传递给服务器的内容
    cache:true   //是否缓存数据
  };
  //resolve,reject,response,fn
  let _setResponseMsg = function _setResponseMsg(...rest){
      let [
        resolve,
        reject,
        xhr,
        fn
      ] = rest,
      res = null,
      response = xhr;
      res.data = fn(response.responseText);
      res.status = response.status;
      res.statusText = response.statusText;
      res.xhr = response;
      res.headers = response.getAllResponseHeaders();
      resolve(res)
  }

  let _convertJSON = function _convertJSON(result){
      let data = "";
      try {
        data = JSON.parse(result);
      } catch (e) {
        reject(e)
      }
      return data
  }

  let _convertString = function _convertString(result){
      return result;
  }

  let _array_to_str = function _array_to_str(key,arr){
      let params = "";
      for(let i0;i<arr.length;i++){
        params += `${key}=${arr[i]}&`;
      }
      return params.slice(0,-1)
  }

  let _convertParams = function _convertParams(cache,params){
    let str = "?",
        time_str = cache ? "":(+(new Date())+"");
      if(typeof params == 'object' && Object.keys(params).length > 0){
          for(let key in params){
            if(typeof params[key] == 'object' && (length in params[key])){
              str += _array_to_str(key,params[key])
            }
            str += `${key}=${params[key]}`;
          }
      }
      return str+"&_="+time_str;
  }

  let _setHeader = function _setHeader(...res){
    let [xhr,headers] = res;
    for(let key in headers){
      if(headers.hasOwnProperty(key))
        xhr.setRequestHeader(key,headers[key])
    }
  }

  //基于promise管理ajax请求
  let ajaxPrmomise = function ajaxPrmomise(options={}){
      // 这里传递的options包含默认配置信息和用户基于暴露的_default修改后的信息
      for(let key in _default){
        if(key in options && _default.hasOwnProperty(key)){
            options[key] = _default[key]
        }
      }
      //=>这里可以写成
      options = {..._default,...options};
      let {
        url,
        method,
        baseURL,
        data,
        dataType,
        headers,
        cache,
        params
      } = options;
      let xhr,send_data;

      return new Promise((resolve,reject)=>{
          xhr = new XMLHttpRequest();
          _setHeader(xhr,headers);
          send_data = method.toLowerCase() == 'get' ? _convertParams(cache,params):(method.toLowerCase() == 'post'? data:"");
          all_url = baseURL + url + send_data;
          xhr.open(method,all_url);
          xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
              if(/^[23]\d{2}$/.test(xhr.status)){
                  dataType = dataType.toUpperCase();
                  if(dataType == "json")
                    _setResponseMsg(resolve,reject,xhr,_convertJSON)
                  _setResponseMsg(resolve,reject,xhr,_convertString)
                }
              }
            }
            ajaxPrmomise.xhr = xhr;
            xhr.send(send_data);
          })
      }
  //修改默认配置，可以通过自己设置一些配置来覆盖默认配置
  ajaxPrmomise.defaults = _default;

["get","head","options",""].forEach((method,indexs)=>{
  ajaxPrmomise[method] = function(url,options){
      return ajaxPrmomise({
        ...options,
        url:url,
        method:method
      })
    }
});
["post","put"].forEach((method,index)=>{
  ajaxPrmomise[method] = function(url,data,options){
    return ajaxPrmomise({
      ...options,
      url:url,
      data:data,
      method:method
    })
  }
})
  window.ajaxPrmomise = ajaxPrmomise;
}(window))
