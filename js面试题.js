
面试题：
  1、如果有一万条数据，想让其绑定到页面中，怎么做比较高性能？
    回答：
      1、文档碎片：遍历数据，把对应的数据和结构都添加到文档碎片中，
        在把文档碎片插入到页面中(主要是为了减少DOM回流=》可以使用基于字符串拼接方式)
      2、使用虚拟DOM，类似于react框架或者vue框架。基于虚拟dom以及diff算法，来实现
        数据绑定

        其一：因为从服务器获取一万条消耗很多时间
        3、本质来说一万条数据绑定到页面中都不是最好的
        其二：页面渲染一万条也会消耗很多时间

    解决方法：
      异步加载数据（分页加载）



##关于ES6一些基础:

  如果要对NaN和NaN进行判断是否相等使用方式是：Object.is()方法
  Object.is(NaN,NaN)  //true

  Object.is(-0,+0)  //  false

  Object.is(0,+0)  //  true

  Object.is(0,-0)  //false


  ES5判断是否相等使用 ==  ===
  0 == '0'  //true

  0 == ''  //true

  0 === '' //  false

  0 === +0  //  true

  0 === -0  //true

  -0 === +0 //true

  Object.is(undefined,NaN)  //false

  Object.is(undefined,undefined)  //true

  Object.is(undefined,0)  //  false

  Object.is(undefined,false)  //false

  Object.is(undefined,null)  //false
