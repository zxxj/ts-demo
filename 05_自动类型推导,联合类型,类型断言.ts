
let stringOrNumber: string | number

// 当使用联合类型时,比如string | number, 可以使用两个类型中共有的方法
// stringOrNumber.toString()
// stringOrNumber.toLocaleString()
// stringOrNumber.valueOf()


// 使用类型推断来实现类型缩小
function getLength(value: string | number): number {

	const str = value as string // 类型推断
	if(str.length) {
		return str.length
	}else {
		const number = value as number
		return number.toString().length
	}
}

// ts中的类型守卫实现类型缩小
function getLength2(value: string | number): number {
	if(typeof value === 'string') {
		return value.length
	}else {
		return value.toString().length
	}
}