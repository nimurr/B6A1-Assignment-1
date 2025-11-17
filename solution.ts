//?------------------------------- Solution 1 -------------------------------

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



//?------------------------------- Solution 2 -------------------------------

const getLength = (value: string | string[] | number[] | any[]) => {

    if (Array.isArray(value)) {
        return value.length;
    }
    else {
        return value.length;
    }

}

//?------------------------------- Solution 3 -------------------------------

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age} `;
    }
}


//?------------------------------- Solution 4 -------------------------------

const filterByRating = (data: { title: string, rating: number }[]) => {
    return data.filter((item) => item.rating >= 4);
}

//?------------------------------- Solution 5 -------------------------------

const filterActiveUsers = (data: { id: number, name: string, email: string, isActive: boolean }[]) => {
    return data.filter((item) => item.isActive)
}

//?------------------------------- Solution 6 -------------------------------

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable?: boolean;
}

const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published : ${book.publishedYear} , Available : ${book.isAvailable ? "Yes" : "No"}`)
}



//?-------------------------------Solution 7 -------------------------------
//! hold this problem
// You are not allowed to use any built-in methods to solve this problem.


const getUniqueValues = (arr1: (number[] | string[]), arr2: (number[] | string[])) => {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
}
const array1 = [1, 2, 3, 4, 4, 5];
const array2 = [3, 4, 5, 6, 7, 8, 7];
console.log(getUniqueValues(array1, array2));


//?------------------------------- Solution 8 -------------------------------

type Product = {
    name: string,
    price: number,
    quantity: number,
    discount?: number
}
const calculateTotalPrice = (data: Product[]): number => {
    const totalPrice = data?.reduce((total, item) => {
        const discountAmount = item.discount ? (item.price * (item.discount ?? 0)) / 100 : 0;
        const totalPriceEachItem = (item?.price - discountAmount) * item?.quantity;
        return total + totalPriceEachItem;

    }, 0)
    return totalPrice;
}
