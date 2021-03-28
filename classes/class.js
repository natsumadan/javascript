 class Backpack {
     //constructor
     constructor(
        name,
        volume,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen
 )  {
        this.name = name;
        this.volume = volume;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left : strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;

    }

    //Methods as a function

    toggleLid(lidStatus) {
        this.lidOpen = lidStatus;

        
    }
    newStrapLength(lengthLeft, lengthRight) {
        this. strapLengthL = lengthLeft;
        this.strapLengthR = lengthRight;
    }

     
 }
 
export default Backpack;