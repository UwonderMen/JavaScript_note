
/*
  Set集合可以传递一个可迭代对象
    new Set(iterator)

  遍历迭代器使用方式是：
    for(let i of iterator){
      console.log(i)
  }
*/

/*
  注意：Set区别：
    Set的keys()方法和values()方法打印的都是相同的，因为Set集合只有值，没有键
    注意和数据区别

    Set集合没有length属性
*/

let set = new Set();

方法：
  1、set.add()   //想集合中增加一个元素，注意只能传递一个参数（可以是任何值）
  2、clear   //清空集合中的元素
  3、delete  //删除某个元素
  4、entries  //获取到集合中的每个元素组成的一个迭代器 （返回值是一个迭代器）
  5、forEach  //遍历集合中的每个元素,遍历的时候，函数参数只有value和集合，没有索引
    set => Set(2) {Array(3), 2}
    set.forEach((item,index,arr)=>{console.log(item,index,arr)})
    //[1, 2, 3] [1, 2, 3]  Set(2) {Array(3), 2}
    //2  2  Set(2) {Array(3), 2}
  6、has   //判断集合是否存在某个元素
  7、keys  //获取集合的键（但是其实是获取的是值。因为集合没有键）（返回值是一个迭代器）
  8、size  //获取集合的大小
  9、values //获取集合的所有值（返回值是一个迭代器）



/*
  关于对象属性名的使用
*/

在ES6后，增加了对对象字面量的属性进行动态赋值，但是动态赋值如果不是字符串，他会自动调用
toString()方法或者String()实例化成字符串

let a = {}

let obj = {[a]:a}  //会调用{}的toString()方法

//为什么要这么做呢？
  因为，对象的属性是要经过hash的，而hash收拾不可变的，因此，如果是其他可变类型，那么就
  不满足hash条件，并且，属性名作为对象中的唯一标识，如果重复则会覆盖

举例：
  var a = {}
  var obj = {[a]:a}
  console.log(obj)  //{[object Object]: {…}}

  var a = []
  var obj = {[a]:a}  //{"": Array(0)}

  var a = null
  var obj = {[a]:a}
  console.log(obj)    //{null: null}

  var a = undefined
  var obj = {[a]:a}
  console.log(obj)    //{undefined: undefined}


/*
  那么有没有一种直接让一些变量成为键呢？
  答案是：有的
  比如：Map

  let map = new Map()
*/

let map = new Map()

Map实例的方法和属性：
  map.clear()  //清除所有的键值对
  map.delete()      //删除指定的键值对
  map.entries()   //获取键值对的组成的数组的迭代器
  map.forEach()   //遍历map中的每一个键值对
  mao.get(key)  //得到指定的键对应的值
  map.has(key)  //判断指定的键是否存在
  map.keys()   //获取到map中的所有键
  map.size   //获取map中的键值对个数
  map.values()  //获取到map中的所有值
  map.set(key,value)  //设置一个键值存储在map中




/*
  Symbol这个也是一个基本数据类型

  只要是通过l执行Symbo函数后，返回的值是一个唯一的值

  Symbol函数创建一个唯一值时支持传递一个参数，只是为了人性化的作为区分这两个值不同，但其实只要
  使用Symbol函数创建唯一值，就是不同的两个值
  注意：
    1、不能使用new，他不是一个类
    2、Symbol也有toString()方法
    3、Symbol不能直接与字符串相加，但是symbol可以调用toString()方法
    4、Symbol可以转bool
      例如 let sy = Symbol()
          let k = sy?true:false
*/

// sy与sy1是两个不同的值
let sy = Symbol()
let sy1 = Symbol()
console.log(sy===sy1)  //false
  注意：
    1、如果一个对象中包含了Symbol函数创建的一个属性名，那么使用for...in..是无法获取到这个属性名的
只能使用Object.getOwnPropertySymbols()方法获取，这个方法返回一个数组
    2、这个Object.getOwnPropertySymbols()方法只返回Symbol函数声明的属性名

Symbol的方法
  Symbol.for(key)  //使用给定的key搜索现有的symbol，如果找到则返回该symbol。
                  //否则将使用给定的key在全局symbol注册表中创建一个新的symbol


本身具备iterator接口的数据结构有哪些：
  Array
  Map
  Set
  String
  TypeArray
  函数arguments对象
  NodeList对象


实现一个迭代器
let myiterator = function(){
  let arr = [1,2,3,4]
  let index = 0;
  let flag = true;
  let item = 0;
  return {
      next(){
        try {
          item = arr[index++]
          flag = true;
        } catch (e) {
            item = "";
            flag = false;
        } finally {
          return {
            value:item,
            done:flag
          }
        }
      }
    }
  }


调用iterator接口的场合
  解构赋值
  扩展运算符
  Set Map
  for...of
  Array.from()
  Promise.all()
  Promise.race()
