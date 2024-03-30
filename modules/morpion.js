import Player from "./Player.js";

export default class Morpion {
  constructor(scene,) {

    this.player1 = new Player("@the_ripper", 0, "X")
    document.getElementById("currentPlayer").innerText = this.player1.getName()
    this.player2 = new Player("@dark_side", 0, "O")
    this.turn = true
    this.handleTurn(this.turn)
    this.victory = ''
    this.clickSound = new Audio('./audios/click.wav');
    this.p1Win = new Audio('./audios/p1Win.wav');
    this.p2Win = new Audio('./audios/p2Win.wav');
    this.gameOver = new Audio('./audios/gameOver.wav');


    document.getElementById("replay").addEventListener("click", () => {
      this.clean(document.querySelectorAll(".cell"))
      document.querySelector("#grid").classList.remove("won")
    })
    document.getElementById("reset").addEventListener("click", () => {
      this.clean(document.querySelectorAll(".cell"))
      document.querySelector("#grid").classList.remove("won")
      document.getElementById("playerOne").innerText="0"
      document.getElementById("playerTwo").innerText="0"
      
    })

  }

  handleCell(cells) {
    let next = ""
    cells.forEach((cell, key) => {
      cell.addEventListener("click", () => {
        this.clickSound.play()
        if (cell.innerText == "") {

          if (this.turn) {

            cell.innerText = this.player1.getSymbole()
            next = this.player1
            this.turn = false

          } else {

            cell.innerText = this.player2.getSymbole()
            this.turn = true
            next = this.player2

          }

          document.getElementById("replay").style.display = "none"
          document.getElementById("reset").style.display = "none"

          this.victory = this.checkWinner(cells, next)
          this.isEnd(this.victory, document.querySelectorAll(".cell"), next)

          document.getElementById("currentPlayer").innerText = next.getName()
        }

      })
    });

  }


  handleTurn() {
    this.handleCell(document.querySelectorAll(".cell"))
  }

  checkWinner(cells, player) {
    let win = false
    if (
      cells[0].innerText == player.getSymbole() &&
      cells[1].innerText == player.getSymbole() &&
      cells[2].innerText == player.getSymbole()
    ) {
      cells[0].style.backgroundColor = "#7d5fff";
      cells[1].style.backgroundColor = "#7d5fff";
      cells[2].style.backgroundColor = "#7d5fff";
      win = true
    }

    if (
      cells[3].innerText == player.getSymbole() &&
      cells[4].innerText == player.getSymbole() &&
      cells[5].innerText == player.getSymbole()
    ) {
      cells[3].style.backgroundColor = "#7d5fff";
      cells[4].style.backgroundColor = "#7d5fff";
      cells[5].style.backgroundColor = "#7d5fff";
      win = true
    }

    if (
      cells[6].innerText == player.getSymbole() &&
      cells[7].innerText == player.getSymbole() &&
      cells[8].innerText == player.getSymbole()
    ) {
      cells[6].style.backgroundColor = "#7d5fff";
      cells[7].style.backgroundColor = "#7d5fff";
      cells[8].style.backgroundColor = "#7d5fff";
      win = true
    }

    if (
      cells[0].innerText == player.getSymbole() &&
      cells[3].innerText == player.getSymbole() &&
      cells[6].innerText == player.getSymbole()
    ) {
      cells[0].style.backgroundColor = "#7d5fff";
      cells[3].style.backgroundColor = "#7d5fff";
      cells[6].style.backgroundColor = "#7d5fff";
      win = true
    }

    if (
      cells[1].innerText == player.getSymbole() &&
      cells[4].innerText == player.getSymbole() &&
      cells[7].innerText == player.getSymbole()
    ) {
      cells[1].style.backgroundColor = "#7d5fff";
      cells[4].style.backgroundColor = "#7d5fff";
      cells[7].style.backgroundColor = "#7d5fff";
      win = true
    }

    if (
      cells[2].innerText == player.getSymbole() &&
      cells[5].innerText == player.getSymbole() &&
      cells[8].innerText == player.getSymbole()
    ) {
      cells[2].style.backgroundColor = "#7d5fff";
      cells[5].style.backgroundColor = "#7d5fff";
      cells[8].style.backgroundColor = "#7d5fff";
      win = true
    }

    if (
      cells[0].innerText == player.getSymbole() &&
      cells[4].innerText == player.getSymbole() &&
      cells[8].innerText == player.getSymbole()
    ) {
      cells[0].style.backgroundColor = "#7d5fff";
      cells[4].style.backgroundColor = "#7d5fff";
      cells[8].style.backgroundColor = "#7d5fff";
      win = true
    }

    if (
      cells[2].innerText == player.getSymbole() &&
      cells[4].innerText == player.getSymbole() &&
      cells[6].innerText == player.getSymbole()
    ) {
      cells[2].style.backgroundColor = "#7d5fff";
      cells[4].style.backgroundColor = "#7d5fff";
      cells[6].style.backgroundColor = "#7d5fff";
      win = true
    }

    return win
  }

  reload(cells) {

    cells.forEach((cell, key) => {
      cell.innerText = ""
    });
    this.turn = "true"

  }

  isEnd(victory, cells, player) {
    if (victory) {
      player.score++
      if(player.getName()==this.player1.getName()){
        this.p1Win.play()
      }else{
        this.p2Win.play()

      }
      document.querySelector(".win-display").innerText = `${player.getName()} a gagné !`
      document.querySelector("#grid").classList.add("won")
      document.getElementById("replay").style.display = "block"
      document.getElementById("reset").style.display = "block"
      this.setScore(this.player1, this.player2)
    }
    else {
      
      let fill = false
      cells.forEach(cell => {
        let content = cell.innerText
        if (content == "") {
          fill = true
        }
      })

      if (fill == false) {
        this.gameOver.play()
        document.querySelector(".win-display").innerText = `Match nul personne n'a gagné !`
      document.querySelector("#grid").classList.add("won")
        document.getElementById("replay").style.display = "block"
        document.getElementById("reset").style.display = "block"
      }

    }
  }

  clean(cells) {
    let fill = false
    cells.forEach(cell => {
      cell.innerText = ""
      cell.style.backgroundColor = "inherit"

    })

    
  }
  setScore(player1, player2){
    let p1 = document.getElementById("playerOne")
    let p2 = document.getElementById("playerTwo")
    p1.innerText = player1.getScore()
    p2.innerText = player2.getScore()
  }
}
