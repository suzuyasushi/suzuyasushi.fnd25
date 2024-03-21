'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let currentMark = "🍣";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;



//boxをクリック後に実行する関数　
//indexを引数にとり、そのクリックされたboxの位置を示す
function pushClick(index) {
    if (gameActive && board[index] === "") {　//gameがActiveで、クリックされたboxの要素が空の時
        board[index] = currentMark;
        document.getElementsByClassName("box")[index].innerText = currentMark;
        if (checkWinner()) {
          document.getElementById("result").innerText = `${currentMark} wins!`
          gameActive = false
        } else if (board.every(box => box !== '')) { //全てのセルが埋まっているということ
            document.getElementById("result").innerText = "draw!";
            gameActive = false;
        }else {
            if(currentMark === "🍣"){
                currentMark = "🍺"
            }else{
                currentMark = "🍣"
            }
        }
            // currentMark = currentMark === "🍣" ?"🍺" : "🍣"; ＜メモ＞ 三項演算子でもできた
        }

    }



//勝利条件の関数
function checkWinner() {
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // 縦
        [0, 4, 8], [2, 4, 6]             // 斜め
    ];

    //すべてのboxに今のマークが入った状況→上記条件のどれかが当てはまること
    return winningPatterns.some(array =>　//上記条件のどれかが当てはまること
        array.every(index => board[index] === currentMark)　//すべてのboxに今のマークが入った状況
    );
}


//リロード
const reload =document.getElementById("reload");
reload.addEventListener("click",function(){
    window.location.reload();
});


