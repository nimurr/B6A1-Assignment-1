//?----------------- Solution 1 -----------------

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



//?----------------- Solution 2 -----------------

const getLength = (value: string | string[] | number[] | any[]) => {

    if (Array.isArray(value)) {
        return value.length;
    }
    else {
        return value.length;
    }

}

//?-------------- Solution 3 -----------------

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


//?----------------- Solution 4 -----------------

const filterByRating = (data: { title: string, rating: number }[]) => {
    return data.filter((item) => item.rating >= 4);
}

//?----------------- Solution 5 -----------------

const filterActiveUsers = (data: { id: number, name: string, email: string, isActive: boolean }[]) => {
    return data.filter((item) => item.isActive)
}

//?----------------- Solution 6 -----------------

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable?: boolean;
}

const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published : ${book.publishedYear} , Available : ${book.isAvailable ? "Yes" : "No"}`)
}

//?----------------- Solution 7 -----------------