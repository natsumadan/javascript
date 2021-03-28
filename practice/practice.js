const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: "false",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  changeName: function(cName){
    this.name = cName;
  },
  changeVolume : function(cVol){
    this.volume = cVol;
  },
  changeColor: function(cColor) {
    this.color = cColor;
  },
  changePocket: function(cPocket) {
    this.pocketNum = cPocket;
  },
};


console.log(backpack.name);
console.log(backpack.volume);
console.log(backpack.color);
console.log(backpack.pockeNum);