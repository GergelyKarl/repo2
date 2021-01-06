import React,{useEffect} from "react";

import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";
import {useDispatch} from "react-redux"
import Widget from "./Widget";


//3:17
function App() {
  const user = useSelector(selectUser);
const dispatch = useDispatch()

useEffect(() => {
auth.onAuthStateChanged(userAuth =>{
if(userAuth){
dispatch(login({
  email: userAuth.email,
  uid:userAuth.uid,
  displayName: userAuth.displayName,
  photoURL: userAuth.photoURL,
}));
}else{

  dispatch(logout())
}

})


}, [dispatch])

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <SideBar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
