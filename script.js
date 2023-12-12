function opschrijvenLinks() {
    var scoreNieuwL = parseInt(document.getElementById("puntenl").value);
    var scoreOudL = document.getElementsByClassName("scoresOudLinks")[0];
    var scoreTotaalL = document.getElementById("totaalLinks");
    scoreOudL.innerHTML = scoreOudL.innerHTML + "<br>" + scoreTotaalL.innerHTML;
    scoreOudL.classList.add("strike");
    scoreTotaalL.innerHTML = parseInt(scoreTotaalL.innerHTML) + scoreNieuwL;
}

function opschrijvenRechts() {
    var scoreNieuwR = parseInt(document.getElementById("puntenr").value);
    var scoreOudR = document.getElementsByClassName("scoresOudRechts")[0];
    var scoreTotaalR = document.getElementById("totaalRechts");
    scoreOudR.innerHTML = scoreOudR.innerHTML + "<br>" + scoreTotaalR.innerHTML;
    scoreOudR.classList.add("strike");
    scoreTotaalR.innerHTML = parseInt(scoreTotaalR.innerHTML) + scoreNieuwR;
}
