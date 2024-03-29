import React, { useState,useEffect } from "react";
import useStyles from "./styles";
import FileBase from "react-file-base64"
import {useDispatch,useSelector} from "react-redux"
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import {createPost,updatePost} from "../../actions/posts"
const Form = ({currentId,setCurrentId}) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch=useDispatch()
  const post=useSelector((state)=>currentId ? state.posts.find((p)=>p._id === currentId) : null )

useEffect(() => {
if (post) {
  setPostData(post)
}
}, [post])

  const handleSubmit = (e) => {
e.preventDefault()

if (currentId) {
  dispatch(updatePost(currentId,postData))
  
}else{

  dispatch(createPost(postData))
}


  };
  const clear = () => {
    setCurrentId(null)
    setPostData({creator:"",title:"",message:"",selectedFile:"",tags:""})
  };

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Post</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({...postData, creator: e.target.value })}
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({...postData, title: e.target.value })}
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({...postData, message: e.target.value })}
        />
        <TextField
          name="creator"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({...postData, tags: e.target.value })}
        />
<div className={classes.fileInput}>

  <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
</div>
<Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
<Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
