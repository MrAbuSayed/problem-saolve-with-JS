

let actor = {
    fristName :"Jishan",
    lastName:"Mia",
    Roll :12,
    sellary:50000,
    chargeBil: function (deposit , tax) {
        
        this.sellary=this.sellary-deposit-tax;
        return this.sellary;


    }
}
    //  let actorChargeBill= actor.chargeBil(1000,100)
    //  console.log(actor.sellary)



let student1 = {
    fristName:"Bablu",
    lastName:"Hasan",
    Roll:123,
    sellary:15000
};


let student2 = {
    fristName:"Hablu",
    lastName:"Gasan",
    Roll:23,
    sellary:1200
}



 let student3 ={

     fristName:"Gablo",
     lastName:"Miah",
     Roll:234,
     sellary:20000  
     

 }
// // বাইন্ড এর মাধ্যমে 
   
//  let studentChargeBill1= actor.chargeBil.bind(student1);
//  studentChargeBill1(400,200);
//   console.log(student1.sellary);
   

// // With Call 

//   actor.chargeBil.call(student1, 5600,100);
//   console.log(student1.sellary);              


// // With Apply 

// actor.chargeBil.apply(student2, [5600,100]);
// console.log(student2.sellary);  
               
// actor.chargeBil.apply(student3,[2000,200])
// console.log(student3.sellary); 

// actor.chargeBil.call(student3,2000,200)
// console.log(student3.sellary); 
  











