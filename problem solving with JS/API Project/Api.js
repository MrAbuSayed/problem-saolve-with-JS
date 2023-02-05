

let userCollect = document.querySelector("#userCollect");
userCollect.addEventListener("click",function(){
    
    let userCount =document.querySelector("#userCount").value;
    let userCountNum= parseInt(userCount);
    userCount.value=0;
            fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then( data => {
                data=data.slice(0, userCountNum);
            const user =document.querySelector("#user");
            console.log(data);
            user.innerHTML='';
            for (let i = 0; i < data.length; i++) {
                const users = data[i];
            
                let h4 = document.createElement("h4");
                h4.innerHTML = `<p>  <button id="details" onclick="getUserDetails(${users.id})">Get Details User-${users.id}</button></p>`;
                user.appendChild(h4);

            }
        });
        
});



// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then(res => res.json())
// .then( data => {
//     const user =document.querySelector("#user");
//      console.log(data);
//     for (let i = 0; i < data.length; i++) {
//         const users = data[i];
       
//         let h4 = document.createElement("h4");
//         h4.innerHTML = `<p> ${users.name} <button id="details" onclick="getUserDetails(${users.id})">Get Details User-${users.id}</button></p>`;
//         user.appendChild(h4);

//     }
// })

function getUserDetails(usersInfo) {
    
    fetch(`https://jsonplaceholder.typicode.com/users/${usersInfo}`)
    .then(res => res.json())
    .then( data => {

        // let heading=  document.querySelector("#heading");
        // heading.innerHTML= data.id;

        const userDetails= document.querySelector("#userDetails");
        userDetails.innerHTML=`

        <h2 id="heading">User-${data.id}</h2><hr>
        <h3>Name: ${data.name}</h3>
        <h3>User-Name: ${data.username}</h3>
        <h3>Email: ${data.email}</h3>
        <h3>City: ${data.address.city}</h3>
        `;
       
    })

}


