
//  Mobail demo

function mobailDemo() {
    

    let maienas1 = document.querySelector(".maienus1");
      maienas1.addEventListener("click",function(){
    
      let moabilCount = document.querySelector(".moabilCount").value;
      let moabilCountNum= parseInt(moabilCount);
       
      if (moabilCountNum>1) {
        let totalMoabilCount = moabilCountNum -1;
        
        document.querySelector(".moabilCount").value=totalMoabilCount;
        

      let moabilCost = document.querySelector("#moabilCost").innerText;
      let moabilCostNum = parseInt(moabilCost);
      let totalMoabilCost = moabilCostNum-1280;

      document.querySelector("#moabilCost").innerText=totalMoabilCost;

        let subTotalPrice =document.querySelector("#price1").innerText;
        let subTotalPriceNum = parseInt(subTotalPrice);
        let totalPrice= subTotalPriceNum-1280;
        document.querySelector("#price1").innerText=totalPrice;

        let TotalPrice =document.querySelector("#totalPrice").innerText;
        let TotalPriceNum = parseInt(TotalPrice);
        let total= TotalPriceNum-1280;
        document.querySelector("#totalPrice").innerText=total;


       };
   
     
      
      

   });


     let plus1 = document.querySelector(".plus1");
     plus1.addEventListener("click",function(){
    
      let moabilCount = document.querySelector(".moabilCount").value;
      let moabilCountNum= parseInt(moabilCount);
      let totalMoabilCount = moabilCountNum +1;    
      document.querySelector(".moabilCount").value=totalMoabilCount;

      let moabilCost = document.querySelector("#moabilCost").innerText;
      let moabilCostNum = parseInt(moabilCost);
      let totalMoabilCost =  1280*totalMoabilCount;
      document.querySelector("#moabilCost").innerText=totalMoabilCost;

      let subTotalPrice =document.querySelector("#price1").innerText;
      let subTotalPriceNum = parseInt(subTotalPrice);
      let totalPrice= subTotalPriceNum+1280;
      document.querySelector("#price1").innerText=totalPrice;
     
        let TotalPrice =document.querySelector("#totalPrice").innerText;
        let TotalPriceNum = parseInt(TotalPrice);
        let total= TotalPriceNum+1280;
        document.querySelector("#totalPrice").innerText=total; 

        if (totalMoabilCount==11) {

          document.querySelector(".moabilCount").value=1;
          document.querySelector("#moabilCost").innerText=1280;
          document.querySelector("#totalPrice").innerText=1320; 
          document.querySelector("#price1").innerText=1320;

         }


   });


};

mobailDemo();


//  Cover demo

function coverDemo() {
    

    let maienas2 = document.querySelector(".maienus2");
      maienas2.addEventListener("click",function(){
    
      let coverCount = document.querySelector(".coverCount").value;
      let coverCountNum= parseInt(coverCount);
       
      if (coverCountNum>1) {
        let totalCoverCount = coverCountNum -1;
        
        document.querySelector(".coverCount").value=totalCoverCount;
        

      let coverCost = document.querySelector("#coverCost").innerText;
      let coverCostNum = parseInt(coverCost);
      let totalCoverCost = coverCostNum-40;

      document.querySelector("#coverCost").innerText=totalCoverCost;

      let subTotalPrice =document.querySelector("#price1").innerText;
      let subTotalPriceNum = parseInt(subTotalPrice);
      let totalPrice= subTotalPriceNum-40;
      document.querySelector("#price1").innerText=totalPrice;

      let TotalPrice =document.querySelector("#totalPrice").innerText;
      let TotalPriceNum = parseInt(TotalPrice);
      let total= TotalPriceNum-40;
      document.querySelector("#totalPrice").innerText=total;

      };
   

    });


         let plus2 = document.querySelector(".plus2");
         plus2.addEventListener("click",function(){
         
         let coverCount = document.querySelector(".coverCount").value;
         let coverCountNum= parseInt(coverCount);

           let totalCoverCount = coverCountNum +1;

           document.querySelector(".coverCount").value=totalCoverCount;

         let coverCost = document.querySelector("#coverCost").innerText;
         let coverCostNum = parseInt(coverCost);
         let totalCoverCost = coverCostNum+40;
         
         document.querySelector("#coverCost").innerText=totalCoverCost;
         

         let subTotalPrice =document.querySelector("#price1").innerText;
         let subTotalPriceNum = parseInt(subTotalPrice);
         let totalPrice= subTotalPriceNum+40;
         document.querySelector("#price1").innerText=totalPrice;
 
         let TotalPrice =document.querySelector("#totalPrice").innerText;
         let TotalPriceNum = parseInt(TotalPrice);
         let total= TotalPriceNum+40;
         document.querySelector("#totalPrice").innerText=total;

         if (totalCoverCount==11) {

          document.querySelector(".coverCount").value=1;
          document.querySelector("#coverCost").innerText=40;
          document.querySelector("#price1").innerText=1320;
          document.querySelector("#totalPrice").innerText=1320; 

         }
        


     });


};

coverDemo();


// Cross demo

 function crossDemo() {

     let cros1= document.querySelector(".cros1");
     cros1.addEventListener("click",function(){
     
       let demo1 =document.querySelector(".row1");
       demo1.style.display="none";

       
       let moabilCost = document.querySelector("#moabilCost").innerText;
       let moabilCostNum = parseInt(moabilCost);
       let totalMoabilCost = moabilCostNum;

       let subTotalPrice =document.querySelector("#price1").innerText;
         let subTotalPriceNum = parseInt(subTotalPrice);
         let totalPrice= subTotalPriceNum-totalMoabilCost;
         document.querySelector("#price1").innerText=totalPrice;

        let TotalPrice =document.querySelector("#totalPrice").innerText;
        let TotalPriceNum = parseInt(TotalPrice);
        let total= TotalPriceNum-totalMoabilCost;
        document.querySelector("#totalPrice").innerText=total;

   });

     let cros2= document.querySelector(".cros2");
     cros2.addEventListener("click",function(){
    
      let demo1 =document.querySelector(".row2");
      demo1.style.display="none";

      let coverCost = document.querySelector("#coverCost").innerText;
      let coverCostNum = parseInt(coverCost);
      let totalCoverCost = coverCostNum;
         
      let subTotalPrice =document.querySelector("#price1").innerText;
      let subTotalPriceNum = parseInt(subTotalPrice);
      let totalPrice= subTotalPriceNum-totalCoverCost;
      document.querySelector("#price1").innerText=totalPrice;

      let TotalPrice =document.querySelector("#totalPrice").innerText;
      let TotalPriceNum = parseInt(TotalPrice);
      let total= TotalPriceNum-totalCoverCost;
      document.querySelector("#totalPrice").innerText=total;

   });

}

crossDemo();