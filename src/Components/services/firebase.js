
import { initializeApp } from "firebase/app";

import { 
  getFirestore, 
  collection,
  doc, 
  getDocs,
  getDoc,
  query,
  where, 
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRg6rx1OLdg2Doy50bIyOTMDKsqGF_eSQ",
  authDomain: "reactsonnydelvalle.firebaseapp.com",
  projectId: "reactsonnydelvalle",
  storageBucket: "reactsonnydelvalle.appspot.com",
  messagingSenderId: "294546684797",
  appId: "1:294546684797:web:9b1cec11c02c7bf754aa14"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);


export async function getProduct() {
  const collectionRef = collection(db, "Product");
  let results = await getDocs(collectionRef);
  let dataProduct = results.docs.map(doc =>{ 
  return {id: doc.id,...doc.data()}
  });
  return dataProduct;
}

export async function getUnProduct(idParams) {
  const docRef = doc(db, "Product", idParams);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
  }
}
 

export async function getProductByCategory(idCategoryParams) {
  const collectionRef = collection(db, "Product");

  const queryCat = query(
    collectionRef,
    where("category", "==", idCategoryParams)
  );

  let results = await getDocs(queryCat);

  let dataProduct = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataProduct;
}
export async function createBuyOrder(orderData){
  const collectionRef = collection(db, "Pedidos");
  let respuesta = await addDoc(collectionRef, orderData)
  return respuesta.id;
}

export async function DataToFirebase(){
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
  },
 ]; 

 let itemsCollectionRef = collection(db, "Product")

  for(let product of data){
    delete(product.id)
    let newDoc = await addDoc(itemsCollectionRef, product);
    console.log("Documento creado:",newDoc.id)
  }
}

export default FirebaseApp;