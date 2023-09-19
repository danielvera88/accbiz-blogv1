import { getPosts } from './lib/sanity'
 
export default async function sitemap() {

    const baseUrl = "https://accountingbiz.ai"

    //get all posts
    const posts = await getPosts();
    const postsUrls = posts.map((post) => {
        return {
            url: `${baseUrl}/post/${post.slug}`,
            lastModified: new Date(post._createdAt)
        }
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    ...postsUrls
    
  ]
}