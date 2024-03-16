interface IPerson {
	name: string;
	age?: number;
	readonly id: number;
}

const person:IPerson = {
	name: 'xin',
	age: 18,
	id: 1
}

// person.id = 20 // 只读属性不能被修改