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
