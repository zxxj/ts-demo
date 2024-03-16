
const getSum = (x: number, y: number, z?: number): number => {

	if(typeof z === 'number') {
		return x + y + z
	}else {
		return x + y
	}
}


// 使用接口声明函数参数的类型与返回值类型
interface ISum {
	(x: number, y: number, z?:number): number
}
const getSum2: ISum = getSum
