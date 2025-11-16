//? Solution 1 :-

const formatValue = (value: string | number | boolean) => {
    if (typeof value === "string") {
        return (value.toLocaleUpperCase());
    } else if (typeof value === "boolean") {
        return value ? "false" : "true";
    }
    else {
        return value * 10;
    }
};



//? Solution 2 :-

const getLength = (value: string | string[] | number[] | any[]) => {

    if (Array.isArray(value)) {
        return value.length;
    }
    else {
        return value.length;
    }

}

//? Solution 3 :-

// class Person {
//     constructor(public name: string, public age: number) { }
//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age}`
//     }
// }

// const person1 = new Person("Nerob" , 24);
// console.log(person1.getDetails());


class Person {
  constructor(public name: string, public age: number) {}

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Example usage:
const person1 = new Person("Nimur Rahman", 22);
console.log(person1.getDetails());
