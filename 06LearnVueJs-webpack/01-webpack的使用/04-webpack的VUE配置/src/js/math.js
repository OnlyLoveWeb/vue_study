function add(num1, num2) {
	return num1 + num2;
}
// 导出方式一
export {
	add
}
// 导出方式二
export var name = 'shen';
export var height = 1.88;

// 导出函数和类
export function mul(num1, num2){
	return num1 * num2;
}

export class Person {
	run() {
		console.log('在奔跑');
	}
}
// 默认导出
var address = 'luoyang';
// export default address;
export default function() {
	console.log('talking');
}
export var one = '1';
export var two = '2';
export var three = '3';

