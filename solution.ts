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

console.log(formatValue("hello"));
console.log(formatValue(10));
console.log(formatValue(false));

//? Solution 2 :-

