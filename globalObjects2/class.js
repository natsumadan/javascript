class Backpack{constructor(
        name,
        volume,
        pocketNum,
        size,
        color,
        lidOpen,
        strapLeft,
        strapRight,
        date,
    ){
        //properties
        this.name= name;
        this.volume= volume;
        this.pocketNum= pocketNum;
        this.size= size;
        this.color=color;
        this.lidOpen=lidOpen;
        this.strapLength= {
            left: strapLeft,
            right: strapRight,

        };
        this.date=date;
    }

    // methods as normal functions
    togglelid(lidStatus){
        this.lidOpen= lidStatus;
    }


    strapLength(leftLength, rightLength) {
        this.strapLeft= leftLength;
        this.strapRight= rightLength;
    }
}

export default Backpack;