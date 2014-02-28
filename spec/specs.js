beforeEach(function(){
  Board.spaces = [];
});

describe("Game", function() {
  describe("create", function() {
    it("should create two player", function() {
      var testGame = Game.create("Mary", "Jane");
      testGame.playerOne.symbol.should.equal("Mary");
      testGame.playerTwo.symbol.should.equal("Jane");
    });
    it("Create and initialize and should be prototype of Game", function() {
      var testGame = Game.create("Mary", "Jane")
      Game.isPrototypeOf(testGame).should.equal(true);
    });
    // it("game should create a board with 3 rows and 3 columns", function() {
    //   var testGame = Game.create("X", "O");
    //   var length = testGame.board.board[1].length;
    //   length.should.eql(3);
    // });   
  });
  describe("turn", function() {
    it("add player to spaces array", function() {
      var testGame = Game.create("x","y");
      testGame.turn(testGame.playerOne.symbol,1,2);
      this.board.spaces[1].markedBy.should.equal("x");
      
    });
  });
});


describe("Board", function() {

  describe("create", function() {
    it("creates 9 spaces", function() {
      var testBoard = Board.create();
      testBoard.spaces.length.should.equal(9);
    });


    it("creates 9 spaces with the proper coordinates", function() {
      var testBoard = Board.create();
      testBoard.spaces[1].xCoordinate.should.eql(1);
      //testBoard.spaces[0].should.eql([1,1]);
      testBoard.spaces[7].yCoordinate.should.eql(2);
  });
  // describe("takeSpace", function() {
  //   it("should take space", function() {
  //     var testGame = Game.create("X", "Y");
  //     testGame.space.takeSpace("X", 1, 2);
  //     testGame.board.board[];
  //   });
   });
});
/*
describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
  describe("create", function() {
    it("creates a new Player object", function() {
      var testPlayer = Player.create("X");
      console.log(testPlayer);
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});
*/
describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });
  describe("create", function() {
    it("should create an x y coordinate", function() {
      var testSpace = Space.create(1,2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });
  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});


