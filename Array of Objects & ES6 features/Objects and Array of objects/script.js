const books = [
    {title:"Harry Potter", author:"JK. Rowling", year:1998, rating:5.0},
    {title:"Lord of the RIngs", author:"Tolkien", year:1995, rating:5.0},
    {title:"Atomic Habits", author:"Jhon Doe", year:2005, rating:4.7},
    {title:"Can't Hurt Me", author:"David Goggins", year:2020, rating:4.5},
    {title:"Serway Physics hehe", author:"Some mf", year:2003, rating:0}

];
const bookTitles = books.map((name) => {
    return name.title;
});
const bookRating = books.filter((num) => {
    return num.rating>= 4.5;
});
console.log(bookTitles);
console.log(bookRating);