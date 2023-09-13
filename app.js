// const addbookButton = document.getElementById('addBook')
// const bookName = document.getElementById('bookName')
// const bookAuthor = document.getElementById('bookAuthor')
// const bookPages = document.getElementById('bookPages')
// const bookReadCheck = document.getElementById('bookReadCheck')
const cardContainer = document.querySelector('.card-container')
const submitForm = document.getElementById("myForm")
let myLibrary = [];
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

function addBookToLibrary(title,author,pages,readStatus){
    let newBook = new Book(title,author,pages,readStatus)
    myLibrary.push(newBook)
}

addBookToLibrary('The Hunger Games', 'Suzanne Colins', 374, true)

function createLibrary(){
    cardContainer.innerHTML = ''
    myLibrary.forEach(book => {
        let newCard = document.createElement('div')
        newCard.classList.add('card')

        let newBookTitle = document.createElement('h3')
        newBookTitle.classList.add('bookTitle')
        newBookTitle.textContent = book.title
        
        let newBookAuthor = document.createElement('p')
        newBookAuthor.classList.add('bookAuthor')
        newBookAuthor.textContent = book.author

        let newBookPages = document.createElement('p')
        newBookPages.classList.add('bookPages')
        newBookPages.textContent = book.pages

        let newBookButton = document.createElement('button')
        newBookButton.classList.add('bookButton')
        if(book.readStatus){
            newBookButton.classList.add('read')
            newBookButton.textContent = "Read"
        } else {
            newBookButton.textContent = "Not read"
        }

        newBookButton.addEventListener("click", function(){
            // if(newBookButton.classList.contains(read))
            if(book.readStatus){
                book.readStatus = false
                newBookButton.classList.remove('read')
                
                
            } else {
                newBookButton.classList.add('read')
                book.readStatus = true
            }
            console.log(book)
        })

        

        newCard.appendChild(newBookTitle)
        newCard.appendChild(newBookAuthor)
        newCard.appendChild(newBookPages)
        newCard.appendChild(newBookButton)
        cardContainer.appendChild(newCard)
    });
}

function addBook(bookName,bookAuthor,bookPages,bookReadCheck){
    let newBook = new Book(bookName,bookAuthor,bookPages,bookReadCheck)
    myLibrary.push(newBook)
    createLibrary()
}

submitForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this)
    const bookName = formData.get("name")
    const bookAuthor = formData.get("author")
    const bookPages = formData.get("pages")
    const bookReadCheck = formData.get("read")
    addBook(bookName,bookAuthor,bookPages,bookReadCheck)
})
//function changeReadStatus(){
    //Swap books readStatus to true if false, false if true
    //Change button styling and textContent
//}

createLibrary()
console.log(myLibrary)