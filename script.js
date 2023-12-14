
const scoreLijstL = [0];
const scoreLijstR = [0];

function opschrijvenLinks() {
    var scoreNieuwL = parseInt(document.getElementById("puntenl").value);
    var scoreOudL = document.getElementById("scoresOudLinks");
    var scoreTotaalL = document.getElementById("totaalLinks");
    if (isNaN(scoreNieuwL) === false ) { 
        scoreLijstL.push(parseInt(scoreTotaalL.innerHTML) + scoreNieuwL); 
        scoreOudL.innerHTML = scoreLijstL.slice(0, scoreLijstL.length - 1).join('<br>');
        scoreOudL.classList.add("strike");
        console.log(scoreLijstL)
        scoreTotaalL.innerHTML = parseInt(scoreTotaalL.innerHTML) + scoreNieuwL;
        // somL = scoreLijstL.reduce((a, b) => a + b, 0);
        
        document.getElementById("puntenl").value = ""; //input resetten naar placeholder
        return scoreLijstL        
} 
    
    
}

function opschrijvenRechts() {
    var scoreNieuwR = parseInt(document.getElementById("puntenr").value);
    var scoreOudR = document.getElementById("scoresOudRechts");
    var scoreTotaalR = document.getElementById("totaalRechts");
    if (isNaN(scoreNieuwR) === false) {
        scoreLijstR.push(parseInt(scoreTotaalR.innerHTML) + scoreNieuwR); 
        scoreOudR.innerHTML = scoreLijstR.slice(0, scoreLijstR.length - 1).join('<br>');
        scoreOudR.classList.add("strike");
        scoreTotaalR.innerHTML = parseInt(scoreTotaalR.innerHTML) + scoreNieuwR;
        document.getElementById("puntenr").value = "";
        console.log(scoreLijstR)
        return scoreLijstR
        
    }    
}
   
function undoLinks() {
    var zeker = confirm("Zie je zeker daje gemist ziet?");
    if (zeker == true) {
        var scoreTotaalL = document.getElementById("totaalLinks");
        scoreTotaalL.innerHTML = parseInt(scoreTotaalL.innerHTML) - (scoreLijstL[scoreLijstL.length-1] - scoreLijstL[scoreLijstL.length-2]);
        scoreLijstL.pop()
        document.getElementById("scoresOudLinks").innerHTML = scoreLijstL.slice(0, scoreLijstL.length - 1).join('<br>');
        console.log(scoreLijstL)
        if (isNaN(scoreTotaalL.innerHTML)) {
            scoreTotaalL.innerHTML="0"
        }  
    }  
    
}

function undoRechts() {
    var zeker = confirm("Zie je zeker daje gemist ziet?");
    if (zeker == true) {
        var scoreTotaalR = document.getElementById("totaalRechts");
        scoreTotaalR.innerHTML = parseInt(scoreTotaalR.innerHTML) - (scoreLijstR[scoreLijstR.length-1] - scoreLijstR[scoreLijstR.length-2]);
        scoreLijstR.pop()
        document.getElementById("scoresOudRechts").innerHTML = scoreLijstR.slice(0, scoreLijstR.length - 1).join('<br>');
        if (isNaN(scoreTotaalR.innerHTML)) {
        scoreTotaalR.innerHTML="0"
        }
    }
}

function reset() {
    var zeker = confirm("Zie je zeker daje alle puntn wilt wegdoen?");
    if (zeker == true) {
        location.reload();
    }     
}
