import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"


export const loadChats = async( uid = '') => {
  if (!uid) throw new Error('El uid del usuario no existe')

    const userDocRef = collection(FirebaseDB,`${uid}/chats/usuarios`);
    const userDocSnap = await getDocs(userDocRef);

    const data=[]
    userDocSnap.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() })
  })


    const collectionRef = collection(FirebaseDB,`${uid}/chats/mensajes` )
    const docs = await getDocs(collectionRef)

    const chats = []
    docs.forEach(doc => {
        chats.push({ id: doc.id, ...doc.data() })
    })

    const mergedData =  chats.map(chat => {
      const userData = data.find(user => user.id === chat.idCliente);
      return {    
        idCliente: chat.idCliente,  
        ...userData,
        ...chat, 
      };
    });

    
    return mergedData
}
