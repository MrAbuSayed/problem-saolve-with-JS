//   let student1={
       
//       nam :"sayed",
//       roll:12,
//       id:1234,
//       address:"Comilla"

//   }

//   let jsToJSON= JSON.stringify(student1);
//   console.log(jsToJSON);
//   let jsonToJS= JSON.parse(jsToJSON);
//   console.log(jsonToJS);

//   fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => studentInfo(json))

//       function studentInfo(infus){
          
//              console.log("USerInfous",infus);
//              let studentName = infus.map(user => user.name);
//              let ul= document.getElementById("userContainer");
//              for (let i = 0; i < studentName.length; i++) {
//                 const element = studentName[i];
//                 console.log(element)

//                 let li= document.createElement("li");
//                 li.innerText=element;
//                 ul.appendChild(li);
                
//              }

//             // let studentName = infus.map(user => user.username);
//             //   console.log("Name",studentName);

//       }