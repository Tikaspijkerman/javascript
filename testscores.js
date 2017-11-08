function average(testScores){
    var scoresTotal = 0;
    for (var i = 0; i < testScores.length; i++){
      scoresTotal += testScores[i];
    }
var scoreAverage = Number(scoresTotal/testScores.length);
return Math.round(scoreAverage);
}

console.log(average([70, 60, 40, 45, 50, 75, 80]));
