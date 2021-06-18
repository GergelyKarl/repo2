import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import pic from "./images/pic.jpg";
import Post from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles"

const App = () => {
const classes=useStyles()

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Blog
        </Typography>
        <img className={classes.image} src={pic} alt="blog" height="60" width="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing>
            <Grid item xs={12} sm={7}>
              <Post />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;