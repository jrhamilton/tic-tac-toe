var Game = {
  create: function(playerOne, playerTwo) {
    var game = Object.create(Game);
    game.initialize(playerOne, playerTwo);
    return game;
  },
  initialize: function(playerOne, playerTwo) {
    //this.board = Board.create(1);  //console.log(this.board);
    this.playerOne = Player.create(playerOne);
    this.playerTwo = Player.create(playerTwo);
    this.board = this.createBoard();
  },
  createBoard: function() {
    var board = Board.create();
    return board;
    console.log(this.board);
  },
  turn: function(player,x,y) {console.log("creating space");
      this.board.takeSpace(player, x, y);
  }
};

var Player = {
  create: function(symbol) {
    var player = Object.create(Player);
    player.initialize(symbol);
    return player;
  },
  initialize: function(symbol) {
    this.symbol = symbol;
  }
}

var Space = {
  create: function(x, y) {
    var space = Object.create(Space);
    space.initialize(x, y);
    return space;
  },
  initialize: function(x, y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
    this.markBy(false);  
  },
  markBy: function(player) {
    this.markedBy = player;
  }
}

var Board = {
  create: function() { 
    var board = Object.create(Board);
    board.initialize();  
    return board; 
  },
  initialize: function() {
    this.spaces = [];
    var space;
    var x;
    var y;
    for (var i=1; i<=3; i++) {
      for (var j=1; j<=3; j++) {
        space = Space.create(i,j);
        this.spaces.push(space);
      }
    }
  },
  takeSpace: function(player, x, y) {console.log("howdy");
    var i = this.find(x,y);
    if (i >= 0) {
      console.log(i);
      this.spaces[i].markBy(player);
    }
  },
  find: function(x,y) {
    console.log("first");
    for (var i in this.spaces) {
      console.log("second");
      if (this.spaces[i].xCoordinate==x && this.spaces[i].yCoordinate==y) {
        console.log("third");
        console.log(spaces[i].markedBy);
        if (this.spaces[i].markedBy!==false) {
          console.log("fourth is not false, and it is " + this.spaces[i].markedBy);
          return -1;
        } else {
          console.log("fourth is false");
          return i;
        }
      }
    }
  }
}
