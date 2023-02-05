



   //   Home Page or Login Area start

    function logInArea(){


        let button = document.querySelector(".btns");
        button.addEventListener("click",function(){
     
       let valu1 = document.querySelector(".email").value;
        
       let valu2 = document.querySelector(".pass").value; 
       
     
          if (valu1 && valu2) {
     
           let login= document.querySelector(".loginArea");
           login.style.display="none";
             
           let text = document.querySelector(".balance");
           text.style.display="block";
     
           // let msg = document.querySelector(".msg");
           // msg.innerText= "Successfully LogIn"
     
           timeOut("Successfully LogIn");
          }else{
     
           // let msg = document.querySelector(".msg");
           // msg.innerText="Your Input Is Worng"
            timeOut("Your Input Is Worng");
             
          }
          function timeOut(text){
              let msg = document.querySelector(".msg");
              msg.innerText=text;
              msg.style.display="block";
                setTimeout(() => {
               let msg = document.querySelector(".msg");
               msg.style.display= "none";
             }, 800);
          };
     });
     


    };
    logInArea();

   //   Home Page or Login Area ends


//    Balance Area Starts
  
function balanceArea() {
    
  
 let deps=document.querySelector(".depositbtn");
 deps.addEventListener("click",function(){
   
    let depositAmmount = document.querySelector("#depositAmmount").value;
    let depositNum = parseFloat(depositAmmount);

    let  cuurentDeposit = document.querySelector("#cuurentDeposit").innerText;
    let cuurentDepositNum = parseFloat(cuurentDeposit);
    let total = depositNum+cuurentDepositNum;
     console.log(total)
     document.querySelector("#cuurentDeposit").innerText= total;
     

    
 
   let currentBalance= document.querySelector("#currentBalance").innerText;
   let currentBalanceNum=parseFloat(currentBalance);
   let totalBalance=currentBalanceNum+total;
    console.log(currentBalanceNum+total);

     
     document.querySelector("#currentBalance").innerText=totalBalance;
     document.querySelector("#depositAmmount").value='';
     document.querySelector("#cuurentDeposit").innerText= 00;
    

 })




 let withdr=document.querySelector(".withdrawbtn");
 withdr.addEventListener("click",function(){
   
    let withdrawAmmount = document.querySelector("#withdrawAmmount").value;
    let withdrawtNum = parseFloat(withdrawAmmount);

    let  cuurentWithdraw = document.querySelector("#cuurentWithdraw").innerText;
    let cuurentWithdrawtNum = parseFloat(cuurentWithdraw);
    let total = withdrawtNum+cuurentWithdrawtNum;
     console.log(total)
     document.querySelector("#cuurentWithdraw").innerText= total;
    

     let currentBalance= document.querySelector("#currentBalance").innerText;
     let currentBalanceNum=parseFloat(currentBalance);
     let totalBalance=currentBalanceNum-total;

     document.querySelector("#currentBalance").innerText=totalBalance;
    document.querySelector("#withdrawAmmount").value='';
    document.querySelector("#cuurentWithdraw").innerText= 00;

 })



}
balanceArea();
//    Balance Area Ends




