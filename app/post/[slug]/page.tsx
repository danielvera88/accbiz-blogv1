import { Post } from "@/app/lib/interface";
import {client} from "@/app/lib/sanity"
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

async function getData(slug: string){
    const query = `*[_type=="post" && slug.current == "${slug}"][0]`

    const data = await client.fetch(query);

    return data;
}

async function getAllPosts() {
    const query = `*[_type == "post"][0...2]`
  
    const data = await client.fetch(query);
  
    return data;
  }

export default async function SlugPage({params}: {params: {slug: string}}){
    const data = (await getData(params.slug)) as Post;

    const posts = (await getAllPosts()) as Post[];


    const PortableTextComp = {
        types: {
            image: ({value}: {value: any}) => (
                <img src={urlFor(value).url()} alt="" className="w-1/2 h-1/2 mx-auto rounded-lg"/>
            )
        }
    }

    return(
        <div className="">
            <header className="pt-20 space-y-4 mt-12">

                <div className=" max-w-3xl mx-auto">
                    <h1 className="text-5xl font-extrabold tracking-tight text-center mx-4">{data.title}</h1>
                </div>
                <div>
                    <div>
                            <p className="text-sm font-light ml-14 text-center">Published on {new Date(data._createdAt).toISOString().split("T")[0]}</p>
                    </div>
                </div>
            </header>

            <div className="divide-y divide-gray-200 py-7 max-w-4xl mx-auto">
                <div>
                    <div className="m-8 space-y-5 text-ellipsis">
                        
                        <PortableText value={data.content} components={PortableTextComp}/>
                    </div>
                </div>
            </div>

            <hr className="mx-10"/>
            <h1 className="text-center my-10 text-2xl font-extrabold text-green">Recent Posts</h1>
            <div className="flex mx-4 space-x-8 mb-12 md:flex-col md:justify-center md:items-center md:max-w-lg md:mx-auto md:space-x-0">
            {posts.map((post) => (
          <li
            key={post._id}
            className="my-4 mx-auto w-5/6 text-center border-black border-2 rounded-lg"
          >
            <article className="space-y-8 p-4">
              <Link href={`/post/${post.slug.current}`} prefetch className="">
                <div>
                  <h3 className="text-xl font-semibold leading-normal">
                    {post.title}
                  </h3>
                </div>
              </Link>

              


              <button className="btn-1">
                <a href={`/post/${post.slug.current}`}>Read post</a>
              </button>
            </article>
          </li>
        ))}
            </div>
        </div>
    )
}