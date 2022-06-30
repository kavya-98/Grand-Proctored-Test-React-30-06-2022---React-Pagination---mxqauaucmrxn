const fetchPosts = async (page, limit) => {
  let url =
    "https://jsonplaceholder.typicode.com/posts?_page={page}&_limit={limit}";
  fetch(url);
};

export { fetchPosts };
