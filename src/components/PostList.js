import React from "react";
import { Card, Grid, CardContent, Typography, Box } from "@material-ui/core";
import { useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector(state => state.posts);

  return (
    <Grid container>
      {posts.keys.map(key => (
        <Grid item xs={12} key={key}>
          <Box my={1} mx={2}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h4">
                  {posts.entities[key].title}
                </Typography>
                <Typography>{posts.entities[key].body}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
