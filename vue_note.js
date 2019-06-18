
vue中的一些指令

v-on：绑定当然可以使用@符号代替
v-html:绑定html标签，如果值是html标签，那么会解析成dom元素
v-text：普通值的绑定
v-for：循环
v-if：如果存在显示（如果存在将会渲染出来，不存在不会渲染）,display:none
v-show:如果为true显示，如果不为true，则上设置visibility:hidden
v-once：只渲染一次，可以与v-model联用，只会改变首次
v-model：双向数据绑定


@click：绑定点击事件
  如果后边的方法使用了圆括号，例如@click="fn()"，那么在函数中要获取事件对象必须要手动传递,传递形式：@click="fn($event)"
  如果后边的方法没有使用了圆括号，例如@click="fn"，那么在函数中要是用事件对象，直接在参数中加一个形参，这个形参，vue会动态将事件对象传递进去




事件修饰符
  事件修饰符就是在事件绑定的后边使用.加上修饰类型，例如：@click.stop="fn"

  点击事件修饰符包括：
    .stop：阻止冒泡
    .prevent：阻止默认事件
    .caputure：捕获阶段发生
    .self：自己作为事件源时才会发生
    .once：只执行一次（绑定的点击事件，只会执行一次）

  滚动事件事件修饰符
    .passive：不阻止事件的默认行为（能够提升移动端的性能），一般用在移动端的滚动事件中

  按键事件修饰符
    .enter:敲击enter键时触发
    .tab：敲击tab键触发
    .delete：敲击删除键或者退格键时触发
    .esc：敲击esc键触发
    .space：敲击space键触发
    .up：敲击上键时触发
    .down：敲击下键时触发
    .right：敲击右键触发
    .left：敲击左键触发

    举例：
      @keyup.enter="fn"
      @keydown.enter="fn1"
