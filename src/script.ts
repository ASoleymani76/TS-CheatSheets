/// <reference path="./logger-success.ts" />
/// <reference path="./logger-error.ts" />

// Types
let text: string | null = null;
let list: Array<string> = ['amir', 'ali'];
let list2: [string, string, number] = ['amir', 'ali', 3];

// enums
enum test {
    a = 1,
    b = 2
}

// functions
let sum = (x: number, y: number): number => {
    return x + y
}
console.log(sum(1,2));
let sum2 = (x: number, y?: number, ...numbers: number[]) => {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(sum2(1,2,3,4,5,6))


// Objects & making custom Type
type myObj = {            //regular type
    name: string
    age: (num: number) => string
}
let person: myObj = {name: 'Ali', age: (num: number) => '15'};
type searchFunc = (source: string, subString: string) => boolean;     //functional type
let search: searchFunc    // it is a function with our custom functional type


// Class
class Car {
    // Properties
    name: string = 'Benz';
    public engine: string = '2000 cc';
    private model: string = '1995';
    protected price: string = '20000 $';
    static gear: number = 6;   // using static means when we want to call variable, we have say => Car.gear

    // Constructor
    constructor(public color: string) {
        this.color = color;
    }

    // Methods
    public calculatePrice(): any {
        return this.price;
    }

    static logGears() {
        console.log(Car.gear);
    }
}

let car1 = new Car('Black');
console.log(car1.calculatePrice());


// interfaces
interface myLabel {
    readonly size?: number
    label: string
}

function print(labelObj: myLabel) {
    console.log(labelObj.label)
}

let obj = {size: 10, label: 'Sheet'}
print(obj);

// Interface in functions
interface ISearch{
    (source: string, search?: string): string
}

let search :ISearch = (source: string, search: string) =>{
    let result = source.search(search);
    return result > -1;
}

// interfaces usage in classes (implements)
interface person {
    name: string
    family: string
    age: number
    fullName(): string
}

class Amir implements person {
    constructor(
        public name: string,
        public family: string,
        public age: number
    ){}
    fullName(): string {
        return this.name + ' ' + this.family;
    }
}
let amirhossein : person =  new Amir('amirhossein', 'soleymani' , 25);
console.log(amirhossein.fullName())

// singleton class
class Singleton {
    private static instance : Singleton

    private constructor() {}

    public static getSingletonClass () : Singleton {
        if (!Singleton.instance){
            Singleton.instance = new Singleton();
        } return Singleton.instance;
    }
}

let single = Singleton.getSingletonClass();
let single2 = Singleton.getSingletonClass();
console.log(single === single2);
