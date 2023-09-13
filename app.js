const myLibrary = [];
let idCount = 0;

function Book(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.id = generateUniqueID()
}

const  generateUniqueID = () => ++idCount;

Book.prototype.info = function(){
    let readMsg = ''
    if(readStatus){
        readMsg = 'completed'
    } else{
        readMsg = 'not read yet'
    }
    return `${title} by ${author}, ${pages} pages, ${readMsg}`
}
    
//LOOP THROUGH ARRAY, createElement CARD FOR EACH

function addBookToLibrary(title,author,pages,readStatus){
    newBook = new Book(title,author,pages,readStatus)
    myLibrary.push(newBook)
}

addBookToLibrary('The Hunger Games', 'Suzanne Colins', 374, false)

//function changeReadStatus(){
    //Swap books readStatus to true if false, false if true
    //Change button styling and textContent
//}
console.log(myLibrary)