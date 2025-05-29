import axios from 'axios';
export default async function getData(user_id) {
  const { data: userData } = await axios(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );

  const { data: postsData } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
  );
  return {
    ...userData,
    posts: postsData,
  };
}
