import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../api/services/posts.service";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    entities: {},
    keys: [],
    loading: false,
    err: null
  },
  reducers: {
    loading: state => ({ ...state, loading: true }),
    fetchSuccess: (state, action) => {
      const { entities, keys } = action.payload;
      return {
        ...state,
        entities,
        keys,
        loading: false
      };
    },
    fetchError: (state, action) => {
      const { err } = action.payload;
      return {
        ...state,
        loading: false,
        err
      };
    }
  }
});

export const { loading, fetchSuccess, fetchError } = postsSlice.actions;

export const fetchPosts = () => async dispatch => {
  try {
    dispatch(loading());
    const posts = await getPosts();
    dispatch(fetchSuccess(posts));
  } catch (err) {
    dispatch(fetchError({ err }));
  }
};

export default postsSlice.reducer;
