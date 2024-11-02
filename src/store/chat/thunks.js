import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { setChats, setSaving, updateChat, addNewMessage} from "./chatSlice";
import { loadChats } from "../../helpers";
import { getClientId, mensajes, mensajes2 } from "../../helpers/uploadAll";


export const starLoadingChat = () => {
    return async (dispatch, getState) => {

         const { uid } = getState().auth

         const chats = await loadChats(uid)
         dispatch(setChats(chats))
    }
}

export const startSaveChat = (message) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth
        const { active: activeChat } = getState().chat

        const date=  new Date().toISOString()

        const body = {
            _id: crypto.randomUUID(),
            type: 'Message',
            client: activeChat.idCliente,
            createdAt: date,
            message:{
                createdAt: date,
                errorCode:null,
                text: message,
                type: 'text',
                typeUser: 'User',
                updatedAt: date,
                user: uid
            }
        }
        dispatch(setSaving())

        const chats ={
            id: activeChat.id,
            idCliente: activeChat.idCliente,
            name: activeChat.name,
            photoURL: activeChat.photoURL,
            chats: [...activeChat.chats, body]
        }


        const chatToFireStore = {...chats}
        delete chatToFireStore.id
        delete chatToFireStore.name
        delete chatToFireStore.photoURL

        const docRef = doc(FirebaseDB, `${ uid }/chats/mensajes/${ activeChat.id }`)
        await setDoc( docRef, chatToFireStore, { merge: true})
        
        dispatch(updateChat(chats))
    }
}

export const startLoadChatsAll = ( uid = '') => {
    return async (dispatch, getState) => {
        
        const { uid } = getState().auth
        const clientId = await getClientId(mensajes2)

        const newChat= {
            idCliente: clientId,
            chats: mensajes2
        }

        const newDoc = doc( collection ( FirebaseDB, `${uid}/chats/mensajes` ))
        await setDoc( newDoc, newChat)


        newChat.id = newDoc.id
        dispatch ( addNewMessage(newChat))
    }
}
