function bingo(ticket, win){
    let miniWins = 0;
    for (let t of ticket) {
      for (let i = 0; i < t[0].length; i++) {
        let code = t[0].charCodeAt(i);
        if (code == t[1]) {
          miniWins++;
          i = t[0].length;
        }
      }
    }
    return win <= miniWins ? "Winner!" : "Loser!";
  }