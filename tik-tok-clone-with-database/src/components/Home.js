import React,{useState,useEffect} from 'react'
import FollowersColumn from "./FollowersColumn"
import Card from "../components/Card"
import MiniCard from "../components/MiniCard"
import axios from "axios"


let descendingUsers;

function Home() {

    const [users,setUsers]=useState(null)

const addData=async () =>{
await axios.post("/.netlify/functions/addData")

}


const fetchData=async () =>{

    const result= await axios.get("/.netlify/functions/posts")
    console.log(result.data);
setUsers(result.data)

}

useEffect(() => {
addData()
fetchData()

}, [])


if (users) {
descendingUsers=users.sort((a,b)=>a.id<b.id ? 1 : -1)

}

return (
    <>
    {descendingUsers && (
      <div className='container'>
        <FollowersColumn users={topFiveFollowing} />
        <div className='feed'>
          {descendingUsers.map((descendingUser, index) => (
            <Card
              key={index}
              user={descendingUser}
              toggleFollow={userToToggle => setUserToToggle(userToToggle)}
            />
          ))}
        </div>
        <div className="suggested-box">
          <div className="section">
            <div className="suggested">
              <h2 className="bold">Suggested accounts</h2>
              <div className="break" />
              {topFiveNotFollowing.map((notFollowingUser, index) => (
                <MiniCard 
                  key={index} user={notFollowingUser}
                  toggleFollow={userToToggle => setUserToToggle(userToToggle)}
		  	        />)
		  	      )}
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Home
