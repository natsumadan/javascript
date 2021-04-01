const library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Carolann Camilo', title: 'Eyewitness', libraryID: 32456},
    { author: 'Carolann Camilo', title: 'Cocky Marine', libraryID: 32457}  
   ];


const findBooks = function(libraryy, author) {
    const authorReturned = libraryy.find(function(lib, index){
        return lib.author.toLowerCase() === title.toLowerCase()
    })

    return authorReturned;
    
}

let book = findBooks(library, 'Bill Gates');
console.log(book);