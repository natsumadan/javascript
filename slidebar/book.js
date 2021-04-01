class Book{constructor(
    name,
    publisher,
    pages,
    ISBN,
    bookstatus,
    ){
        //properties

        this.name=name;
        this.publisher=publisher;
        this.pages=pages;
        this.ISBN=ISBN;
        this.bookstatus=bookstatus;
    }

    //methods as functions
    updateisbn(UISBN){
        this.ISBN=UISBN;

    }
    changeStatus(status){
        this.status=bookstatus;
    }

}

export default Book;
