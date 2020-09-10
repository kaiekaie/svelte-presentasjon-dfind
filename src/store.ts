import { writable } from 'svelte/store';
import { testobject } from './data';

const multipleArray = writable([Object.create(testobject), Object.create(testobject)]);

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await res.json();

  posts.set(data);
};

const posts = writable<Posts[]>(null);
export { multipleArray, posts, getPosts };
