const btnPlayerA = document.querySelector('#btn-player-a')
const btnPlayerB = document.querySelector('#btn-player-b')
const gamePlayerA = document.querySelector('#game-player-a')
const gamePlayerB = document.querySelector('#game-player-b')
const scoreTable = document.querySelector('.score-board-table')
const set1PlayerA = document.querySelector('#set1-player-a')
const set1PlayerB = document.querySelector('#set1-player-b')
const btnPlayerReset = document.querySelector('#btn-player-reset')

const scoreDetailsSet1 = document.querySelector('#score-details-set1')
const scoreDetailsSet2 = document.querySelector('#score-details-set2')
const scoreDetailsSet3 = document.querySelector('#score-details-set3')

// btnPlayerA.addEventListener('click', addPoints)

// 將表格裡的值轉成數值number
let gameValueA = Number(gamePlayerA.innerHTML)
console.log(gameValueA)

let gameValueB = Number(gamePlayerB.innerHTML)
console.log(gameValueB)

let set1ValueA = Number(set1PlayerA.innerHTML)
console.log(set1ValueA)

let set1ValueB = Number(set1PlayerB.innerHTML)

// gameValueA == 0? gameValueA : "not 0"
// console.log(gameValueA)
  
function addPointA(){
        if (gameValueA == 0 && set1ValueA < 1){
         gameValueA += 15
              console.log(gameValueA)
        } else if (gameValueA == 15 && set1ValueA < 1){
                gameValueA +=15
                console.log(gameValueA)
        } else if (gameValueA == 30 && set1ValueA < 1){
                gameValueA +=10
                console.log(gameValueA)
        } else if (gameValueA == 40 && gameValueB < 40 && set1ValueA < 1){
                gameValueA = 0
                gameValueB = 0
                set1ValueA +=1
                console.log(gameValueA)
        } else if (gameValueA == 40 && gameValueB == 40) {
                gameValueA = 'Ad'
                console.log(gameValueA)
        } else if (gameValueA == 40 && gameValueB == 'Ad'){
                gameValueA = 40
                gameValueB = 40
        }
        else if (gameValueA = 'Ad' && gameValueB == 40){
                gameValueA = 0
                gameValueB = 0
                set1ValueA +=1
                console.log(gameValueB)
        } else gameValueA = 0
        
      gamePlayerA.innerHTML = gameValueA
      gamePlayerB.innerHTML = gameValueB
      set1PlayerA.innerHTML = set1ValueA
}

function addPointB(){
        if (gameValueB == 0 && set1ValueB < 1){
         gameValueB += 15
        } else if (gameValueB == 15 && set1ValueB < 1){
                gameValueB +=15
        } else if (gameValueB == 30 && set1ValueB < 1){
                gameValueB +=10
        }  else if (gameValueB == 40 && gameValueA < 40 && set1ValueB < 1){
                gameValueB = 0
                gameValueA = 0
                set1ValueB +=1
        } else if (gameValueB == 40 && gameValueA == 40) {
                gameValueB = 'Ad'
        } else if (gameValueB == 40 && gameValueA == 'Ad'){
                gameValueB = 40
                gameValueA = 40
        }
        else if (gameValueB = 'Ad' && gameValueA == 40){
                gameValueB = 0
                gameValueA = 0
                set1ValueB +=1
                console.log(gameValueB)
        } else gameValueB = 0

      gamePlayerA.innerHTML = gameValueA  
      gamePlayerB.innerHTML = gameValueB
      set1PlayerB.innerHTML = set1ValueB
}

function resetScore(){
        gameValueA = 0
        gameValueB = 0
        set1ValueA = 0
        set1ValueB = 0

      gamePlayerA.innerHTML = gameValueA  
      gamePlayerB.innerHTML = gameValueB
      set1PlayerA.innerHTML = set1ValueA
      set1PlayerB.innerHTML = set1ValueB
}

function changeScoreColor(){
        const setValue = this.dataset.set
        console.log(setValue)
        const tdAreas = document.querySelectorAll(`td[data-set="${setValue}"]`)
        console.log(tdAreas)

        tdAreas.forEach(function(tdArea){
                tdArea.style.background = '#d66c44'
                tdArea.style.color = '#fefcfd'
        })
}

function returnScoreColor(){
 const setValue = this.dataset.set
        console.log(setValue)
        const tdAreas = document.querySelectorAll(`td[data-set="${setValue}"]`)
        console.log(tdAreas)

        tdAreas.forEach(function(tdArea){
                tdArea.style.background = 'inherit'
                tdArea.style.color = 'inherit'
        })

}

// 比分說明功能
scoreDetailsSet1.addEventListener('mouseenter',changeScoreColor)
scoreDetailsSet1.addEventListener('mouseleave',returnScoreColor)
scoreDetailsSet2.addEventListener('mouseenter',changeScoreColor)
scoreDetailsSet2.addEventListener('mouseleave',returnScoreColor)
scoreDetailsSet3.addEventListener('mouseenter',changeScoreColor)
scoreDetailsSet3.addEventListener('mouseleave',returnScoreColor)

// 比分試算功能
btnPlayerA.addEventListener('click', addPointA)
btnPlayerB.addEventListener('click', addPointB)
btnPlayerReset.addEventListener('click', resetScore)




