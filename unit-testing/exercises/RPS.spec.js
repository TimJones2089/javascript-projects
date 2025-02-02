const whoWon = require('./RPS.js');

describe("whoWon", function(){
    test("returns 'Tie' if P1 = P2", () => {
        let output = whoWon();
        expect(output).toBe("TIE!");
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });

});