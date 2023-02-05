



//   var num =
// $(".p").text(number + number);

var num = $(".btn").click(()=>{


     var Roll = $( ".num").val();
     var Registatioin = $( ".num1").val();
     var Board = $( "#num2").val();
        
     if(Roll==161092 && Registatioin==1911192328 && Board=="Comilla"){

        $(".table").show(1);
        $(".p").text("");
     }

    else if(Roll!==161092 && Registatioin!==1911192328  && Board!=="Comilla"){

        $(".table").hide(10);
        $(".p").text("No Result Found");
     }
     
    //  else if(number>=70 && number<=79){
    //     $(".p").text(" Your result in= (A)");
    //  }

    //  else if(number>=60 && number<=69){
    //     $(".p").text(" Your result in= (A-)");
    //  }
     
    //  else if(number>=50 && number<=59){
    //     $(".p").text(" Your result in= (B)");
    //  }
     

    //  else if(number>=40 && number<=49){
    //     $(".p").text(" Your result in= (C)");
    //  }
     
    //  else if(number>=33 && number<=39){
    //     $(".p").text(" Your result in= (D)");
    //  }

    //  else if(number>=1 && number<=32){
    //     $(".p").text(" Your result in= (Failed)");
    //  }
     
     else{
        $(".p").text("No Result Found");
     }
     
  });




  var num1 = $(".btn").click(()=>{


    var Roll = $( ".num").val();
    var Registatioin = $( ".num1").val();
    var Board = $( "#num2").val();
       
    if(Roll==161081 && Registatioin==1911192313 && Board=="Comilla"){

       $(".table1").show(1);
       $(".p").text("");
    }

   else if(Roll!==161081 && Registatioin!==1911192313  && Board!=="Comilla"){

       $(".table").hide(10);
       $(".p").text("No Result Found");
    }
    

    
    else{
       $(".p").text("No Result Found");
    }
    
 });
