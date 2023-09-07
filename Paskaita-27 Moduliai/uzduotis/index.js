import { getPosts } from "./fetchers/posts.js";

import { generatePosts as generatePostsHtml } from "./generators/posts.js";

import { addToHtml } from "./utils/index.js";

async function generatePosts() {
  const posts = await getPosts();
  const postHtml = generatePostsHtml(posts);

  addToHtml(document.body, postHtml);
}
generatePosts();
