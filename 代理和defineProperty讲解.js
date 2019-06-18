
  Proxy 代理
    实例化一个代理:
    let proxy = new Proxy()
      Proxy实例化包含两个参数：
        第一个参数：代理的对象
        第二个参数：代理这个对象的那些方法或者属性


  举例：
  let  obj = {
    name:"hahah",
    do(){
      console.log("i am is do")
    }
  }
  let proxy = new Proxy(obj,{
    //当使用代理去获取源对象的属性名或者方法的时候会触发这个get()方法
    get(target,prop){
      return target[prop]
    },
    set(target,prop,val){
      target[prop] = val;
    },
    has(target,prop){
      for(let key in target){
        if(target.hasOwnProperty(prop)){
          return true
        }
      }
      return false
    }
  })
  proxy.name=1
  console.log(proxy.name)
  console.log(obj.name)
  console.log("name" in proxy)

----------------------------------------------------

Object.defineProperty(对象，属性，描述符)
  例子:
    Object.defineProperty(obj,"name",{

    })

得到一个对象的属性描述符
  Object.getOwnPropertyDescripter(对象，属性)
  打印：
    configurable:是否可配置（是否可配置表示的是：是否可删除）
    enumeraable：是否可枚举
    value：值
    writable：是否可写（是否可写表示:是否可修改）

  举例：
  var obj = {};
  Object.defineProperty(obj,"name",{
    configurable:true,
    enumerable:false,
    value:"asd",
    writable:true
  })
  //测试是否可修改
  console.log(obj.name)
  obj.name = 123
  console.log(obj.name)
  //测试是否可删除
  console.log(obj.name)
  delete obj.name
  console.log(obj.name)
  //测试是否可迭代
  for(let key in obj){
    console.log(key)
  }
  //查看属性的描述符信息
  console.log(Object.getOwnPropertyDescriptor(obj,"name"))
