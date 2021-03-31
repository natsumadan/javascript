class Book{
    constructor(
        name,
        pages,
        coverPage,
        authorName,
        color,
        dimensionsWidth,
        dimensionsLength,
        bookOpen,
        date,
    ){
        //properties

        this.name= name;
        this.pages= pages;
        this.coverPage= coverPage;
        this.authorName=authorName;
        this.color= color;
        this.dimensions={
            width: dimensionsWidth,
            length:  dimensionsLength,

        };
        this.bookOpen= bookOpen;
        this.date= date;


    }
    //methods as functions
    changeDimensions(lengthL, widthW){
        this.lengthL= dimensionsLength;
        this.widthW= dimensionsWidth;
    }


    toggleBook(bookStatus){
        this.bookStatus= this.bookOpen;
    }

    oldBook(days){
        let date = 

    }
}

export default Book;