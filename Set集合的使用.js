
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
