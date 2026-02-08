

function newPrice(currentPrice , discount ) {
        let  output1 = 0;
        let  output2 = " ";
        let dis =  (currentPrice * discount ) / 100;
        let  discountPrice = dis.toFixed (3)
        let price = currentPrice - discountPrice ;
        output1 = price.toFixed (3)

        if (  typeof currentPrice === "string" || typeof discount === "string"  ) {

            return "Invalid"
            
        }

         
            if (  discount < 0 || discount > 100) {

            output1 = 0;
            
        }



        return output1;

}