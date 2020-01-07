import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CommonLayout from "../layouts/Common";
import { fetchPosts } from "../slices/posts.slice";
import PostList from "../components/PostList";

const useStyles = makeStyles(theme => ({
  box: {
    height: 200,
    width: 400
  }
}));
const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <CommonLayout>
      <Grid container>
        <Grid item xs={0} md={4}>
          <Container>
            <Box bgcolor="primary.main" className={classes.box} my={2} />
          </Container>
        </Grid>
        <Grid item xs={12} md={8}>
          <PostList />
        </Grid>
      </Grid>
    </CommonLayout>
  );
};

export default Home;
