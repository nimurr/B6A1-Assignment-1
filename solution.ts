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
//!hold this solution

// class Person {
//     constructor(public name: string, public age: number) {}
//     getDetails(){
//         return `Name: ${this.name}, Age: ${this.age}`
//     }
// }

// const person1 = new Person("Nerob" , 24);
// console.log(person1.getDetails());

//? Solution 4 :-

// const filterByRating = (movies: { title: string, rating: number }[]) => {
//     return movies.filter((movie) => movie.rating >= 4);
// }

const filterByRating = (data : {title : string , rating : number }[])=>{
    return data.filter((item)=> item.rating >= 4);
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));