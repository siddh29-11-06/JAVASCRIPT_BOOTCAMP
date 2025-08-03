const fetch = require('node-fetch');
async function fetchPosts()
{
    console.log("Fetching posts from the API..")
    const url = "https://jsonplaceholder.typlcode.com/posts";

    try
    {
        const response = await fetch(url);
        if(!response.ok)
        {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const posts = await response.json();

        console.log("Successfully fetched posts!");

        posts.slice(0,5).forEach(post => {console.log(`-${post.title}`)
    });
    }
    catch(error){
        console.log("Failed to fetch posts:",error.message);
    }
}
fetchPosts();