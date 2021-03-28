function Backpack (
    name,
    volume,
    color,
    pocketNum,
    lidOpen.
    strapLengthL,
    strapLengthR,

){
    this.name = name;
    this.volume = volume;
    this.color=color;
    this.pocketNum=pocketNum;
    this.StrapLength= {
        left=strapLengthL,
        right=strapLengthR,
    };
    this.lidOpen = lidOpen;

    this.togglelid = function (lidStatus) {
        this.lidOpen= lidStatus;
        
    }
    this.newstrapLength = function (lengthLeft, lengthRight) {
        this.StrapLength.right = lengthRight;
        this.StrapLength.left = lengthLeft;
        
    };


}

