class Backpack{ constructor(
    //Constructor
    name,
    volume,
    color,
    strapLengthL,
    strapLengthR,
    pocketNum,
    lidOpen,
    dateRequired,
){

    //properties

    this.name =  name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.lidOpen = lidOpen;
    this.dateRequired = dateRequired;
    this.strapedLength = {
        left : strapLengthL,
        right : strapLengthR,

    };
    this.dateRequired = dateRequired;
}

    //methods as normal functions



    toogleLid(lidStatus){
        this.lidOpen = lidStatus;

    }

    newStarpLength(lengthLeft, lengthRight){
        this.strapLengthL = lengthLeft;
        this.strapLengthR = lengthRight;
    }




}



export default Backpack;