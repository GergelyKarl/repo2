import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageOpen: false,
    selectedMail:null
  },
  reducers: {

    selectMail:(state,action)=>{
state.selectedMail =action.payload
    },
    openSendMessage: (state) => {
      state.sendMessageOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageOpen = false;
    },
  },
});

export const {selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
