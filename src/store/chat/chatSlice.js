import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    isSaving: false,
    messageSaved: "",
    chats: [],
    active: null,
  },
  reducers: {
    addNewMessage: (state, action) => {
      state.chats.push(action.payload)
      state.isSaving = false
  },
    setActiveChat: (state, action) => {
        state.active = action.payload
        state.messageSaved = ''
    },
    setChats: (state, action) => {
      state.chats = action.payload
    },
    setSaving: (state) => {
      state.isSaving = true
      state.messageSaved = ''
      //TODO mensaje de error...
    },
    updateChat: (state, action) => {
      state.isSaving = false
      state.active = action.payload
      state.chats = state.chats.map(chat => {
        console.log(state.chats)
        if (chat.id === action.payload.id){
          return action.payload
        }
        return chat
      })
      state.messageSaved = `${ action.payload.title }, actualizada correctamente`
    },
    clearChatLogout: (state) => {
      state.isSaving = false
      state.messageSaved = ''
      state.chats = []
      state.active = null
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setActiveChat,
  setChats,
  setSaving,
  updateChat,
  clearChatLogout,
  addNewMessage
} = chatSlice.actions;
