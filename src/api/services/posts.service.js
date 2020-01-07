import client from "../client";
import URLS from "../constants";

export const getPosts = async () => {
  try {
    const { data } = await client.get(URLS.posts);

    return {
      entities: data.reduce(
        (acc, current) => ({
          ...acc,
          [current.id]: current
        }),
        {}
      ),
      keys: data.map(post => post.id)
    };
  } catch (err) {
    console.log(err);
  }
};
