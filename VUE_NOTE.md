# VUE学习笔记

## 1. v-bind介绍

- 除了内容需要动态来决定之外，某些属性我们也希望动态来绑定，如：。
  - 动态绑定a元素的href属性；
  - 动态绑定img元素的src属性

- 这个时候，我们可以用v-bind指令
  - 作用：动态绑定属性；
  - 缩写：：（语法糖）
  - 预期：any(with argument) | Object(without argument)
  - 参数：attrOrProp(optional)

示例代码：

```JavaScript
<a v-bind:href="url[1]" class="a">点击跳转</a>
		<script type="text/javascript">
			var app = new Vue({
				el: '.a',
				data: {
					url: ['http://www.baidu.com', 'http://www.jd.com']
				}
			})
		</script>
```
## 
