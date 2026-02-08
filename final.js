 /*function signature/sample */
function finalScore (omr) {

//    if (typeof omr !== "object" || omr === null) return "Invalid";



      let sum =   omr.right + omr.wrong + omr.skip ;
      if (sum !==100){
           return "Invalid"
      }

      let rightAns = omr.right * 1;
      let wrongAns = rightAns -  (omr.wrong * 0.5)
      let totalScore = wrongAns
      let finalNumber = Math.round (totalScore)

      return finalNumber;
}