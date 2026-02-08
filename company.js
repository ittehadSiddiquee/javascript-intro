function analyzeText(str) {

    if (typeof str !== "string" ||  str === "") {
        return "Invalid"
    }


     
     let totalLetter = 0;
     let bigest = " ";
     let splt = str.split (' ')
    let sentence = splt.join('')

    for (let i = 0; i < sentence.length; i ++ ) {
         totalLetter = i + 1;
         
    }
     
    for (let word of splt ) {

          if (word.length > bigest.length) {

               bigest = word
          }
    }

    return {

         longwords : bigest,
         token : totalLetter
    }
}


  

  