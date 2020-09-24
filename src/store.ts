import { writable } from 'svelte/store';
import { testobject } from './data';

const multipleArray = writable([Object.create(testobject), Object.create(testobject)]);

const posts = writable<Posts[] | Posts>(null);
const singlePost = writable<Posts>(null);

export { multipleArray, posts, singlePost };
