

function gonoVote(array) {

     let haArr = [];
     let naArr = [];
    if (typeof array !== "object" ||  array.length === 0 ) {

        return "Invalid"
    }
    for (let word of array) {

         if (word === "ha") {

             haArr.push (word)
         }else {

            naArr.push (word)
         }
    }
    

     if (haArr.length > naArr.length) {

        return true 
     }else if (haArr.length === naArr.length) {

        return "equal"
     }else if (haArr.length < naArr.length){

        return false
     }else {

        false
     }


     
}