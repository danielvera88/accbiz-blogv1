import { createClient, groq } from "next-sanity"
import { Post } from "./interface";

const projectId = 'z24glv4d'
const dataset = 'production'
const apiVersion = '2023-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true
});

export async function getPosts(): Promise<Post[]>{
  

 return client.fetch(
    groq`*[_type == "post"] | order(_id) {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      url
    }`
  )
}

export async function getListPost(): Promise<Post[]>{

  return client.fetch(
    groq`*[_type == "post"]| order(_createdAt desc) [0...3]`
  )
}

export async function getPost(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type=="post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      overview,
      "slug": slug.current,
      "image": image.asset->url,
      url
    }`,
    { slug }
  );
}


