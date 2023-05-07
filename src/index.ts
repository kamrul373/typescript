var x = "Hello World";
console.log(x, "typescript" );
// string //array
const user : [number,string,number] = [1,"abul_1", 880171222];
console.log(user);
const array : string[] = ["ami", "tumi", "amara"];
// object
const userInfo : {
	name : string,
	role : string,
	readonly company ? : "Lemon hive",
} = {
	name : "kamrul hasan",
	role : "Frontend developer",
	company : "Lemon hive",
}
console.log(userInfo);
// function 

const add = (a:number,b:number) :number  => a+b ;

const account : {
	name : string,
	id : number,
	balance : number,
	deposit(money:number):string
} = {
	name : "kamrul",
	id : 2,
	balance : 120,
	deposit(money:number) {
		return `Your new balance is ${this.balance + money } taka`
	}
}

const newbalance = account.deposit(30);

console.log(newbalance);
