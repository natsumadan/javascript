const dustbin = {
    name: "silver",
    volume: 15,
    dimensiosn: {
        height: 36,
        width: 15,
    },
    backpackOpen: false,
    



};

const backpack= {
    name: "Blue Backpack",
    volume: 30,
    pockeNum: "grey",
    strapLength: {
        left: 26,
        right: 25,

    },
    lidOpen: false,
    toogleLid: function(lidStatus) {
        this.lidOpen = lidStatus;
    },

    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right=lengthRight;
    },

};
const shirts ={
    name: "h&m",
    volume: 20,
    colour:{
        blue:3,
        skyGreen:8,
    },

};


console.log("The backpack object:", backpack);
console.log("the pocketNum value:", backpack.pockeNum);
console.log("Left before,", backpack.strapLength.left);
backpack.newStrapLength(10,15);
console.log("Left after:", backpack.strapLength.left);
