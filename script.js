function opschrijvenLinks() {
    var scoreNieuw = document.getElementById("puntenl").value;
    var scoreOud = document.getElementsByClassName("scoreslinksStrike")[0];
    var scoreTotaal = document.getElementsByClassName("scoreslinks")[0]
    scoreOud.innerHTML = scoreOud.innerHTML + "<br>" + scoreTotaal.innerHTML;
    let scoreLijst = [0];
    scoreOud.classList.add("strike"); 
    scoreTotaal.innerHTML = scoreNieuw;
    scoreLijst.push(scoreNieuw)


}
