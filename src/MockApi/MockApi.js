
const data = [
 {
    id: 1,
    title:"Set completo",
    img: true,
    src: "/static/media/Agility.98636abb4f151cfeb510.jpg",
    precio: 100,
    detail:"Equipo de habilidad",
    stock: 10,
    category:"futbol",  
 },
 {
    id: 2,
    title:"Correctores",
    img:true, 
    src: "/static/media/disparo.fd4df4b78756b4b6dba6.jpg",
    precio: 60,
    detail:"Correa y pelota", 
    stock: 100,
    category:"basket",
 },
 {
    id: 3,
    title:"Set de precision",
    img:true, 
    src:"/static/media/Rebound.5de9a3263a449b4ddfb3.jpg",
    precio: 85,
    detail:"Panel de pases", 
    stock: 20,
    category:"futbol",
 },
 {
    id: 4,
    title:"Corrector de tiro",
    img:true, 
    src: "/static/media/correa.307bfe62b129131d64b2.jpg",
    precio: 100,
    detail:"Correa para disparos y mejora efectividad",
    stock: 50,
    category:"basket",
 },
 {
    id: 5,
    title:"Set de pases",
    img:true, 
    src: "/static/media/pase.8c73989d79f56c6dff57.jpg",
    precio: 150,
    detail:"Mejora los pases por varios angulos", 
    stock: 20,
    category:"basket",
 },
 {
    id: 6,
    title:"Dominio de balon",
    img:true, 
    src: "/static/media/Kick.6a8b977c0e28eef9d0d8.jpg",
    precio: 50,
    detail:"Control de balon tanto de derecha como izquierda",
    stock: 15,
    category:"futbol",
 }

];
export function getProduct() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    });
  }

  export function getUnProduct(idParams) {
   return new Promise((resolve, reject) => {
      let productReq = data.find((item) => {
         return item.id === Number(idParams);
       });
     setTimeout(() => {
      if(productReq === undefined) 
       reject(new Error("No se pudo encontrar el producto"))
      else{
         resolve(productReq)
      }
     }  , 2000);
   });
 }
 export function getProductByCategory(idCategoryParams) {
   return new Promise((resolve) => {
     let arrayFilterProduct = data.filter(
       (item) => item.category === idCategoryParams
     );
     setTimeout(() => resolve(arrayFilterProduct), 1000);
   });
 }