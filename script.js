class lib{
    constructor(){
        let books=[];
    }
    // feature of library
    // add new book
    addbook(book){
        this.books.push(book)
    }
// show all the books
showbooks(){
    this.books.forEach((books,idx)=> {
        
console.log(`${idx}).${books}`)
    });
}
}
class book{
    constructor(name,auther,price){
        this.Name=name;
        this.Auther=auther;
        this.price=price;

    }
}
let kangra= new lib();
let book1=new book("The art of being alone","Renuka Gavrani",299);
kangra.addbook(book1);
