const postEndpoint = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts() {
  try {
    const response = await fetch(postEndpoint);
    if (response.ok) {
      const posts = await response.json();
      return posts;
    } else {
      console.log("kazkas negerai");
    }
  } catch (error) {
    console.log("error");
  }
}
