import { posts, singlePost } from './store';

const url = 'https://jsonplaceholder.typicode.com/posts';
const getPosts = async () => {
  const res = await fetch(url);
  let data = await res.json();

  posts.update((e) => (e = data));
};

const getSinglePost = async (number?: number) => {
  singlePost.update((e) => (e = null));
  const res = await fetch(`${url}/${number}`);
  let data = await res.json();

  singlePost.update((e) => (e = data));
};

const updatePost = async (input: Posts) => {
  console.log(input);
  const res = await fetch(`${url}/${input.id}`, {
    method: 'PUT',
    body: JSON.stringify({ title: input.title, body: input.body }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  let data = await res.json();

  singlePost.update((e) => (e = data));
};

const addPost = async (input: Posts) => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(input),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  let data = await res.json();

  singlePost.update((e) => (e = data));
};
export { getPosts, getSinglePost, updatePost, addPost };
