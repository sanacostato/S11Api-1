console.log("Entro al main.js");

const imgRandom = document.getElementById('imgRandom');
const URL = "https://picsum.photos/200/300";

//podria ser lo mismo de function (randonimage)
const randomImage = () =>{
    console.log("entro a random image");
    
    
    fetch(URL)
   // .then((response) => { 
  // return response.json();// en esta no necesitamos convertir a JSON por la API
//  })
    .then((data) =>{
     console.log(data);
     imgRandom.src = data.url;
  })
    .catch((error) => {
    console.log("Ocurrio un error");
  });
    

//     fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/mxn.json')
//   .then((response) => { 
//  return response.json();// para convertir a JSON
// })
//   .then((data) =>{
//    console.log(data);
// })
//   .catch((error) => {
//   console.log("Ocurrio un error");
// });
  
  // esto es lo mismo de arriba
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
}