export default (posts = [], action) => {
  switch (action.type) {
    case "Fetch_All":
      return action.payload;

    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return posts;
  }
};
