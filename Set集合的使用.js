
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
