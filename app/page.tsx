import { client } from "./lib/sanity";
import { Post } from "./lib/interface";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}


export default async function Home() {


  
  const data = (await getData()) as Post[];

  return (
    <div className="my-24">
      <div className="mx-auto text-center space-y-4 py-10">
        <h1 className="text-5xl font-semibold">Business Tips</h1>
        <h2 className=" text-gold font-semibold text-lg">
          To Make your business happy
        </h2>
        <p className="text-sm font-light">
          Browse our content for more heplful resources
        </p>
      </div>

      <ul className="lg:grid lg:grid-cols-3">
        {data.map((post) => (
          <li
            key={post._id}
            className="p-6 my-4 mx-auto w-5/6 text-center border-black border-2"
          >
            <article className="space-y-8 py-4">
              <Link href={`/post/${post.slug.current}`} prefetch className="">
                <div>
                  <h3 className="text-4xl font-bold leading-10">
                    {post.title}
                  </h3>
                </div>
              </Link>

              <div>
                <p>
                  Published:{" "}
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>

              <p className="max-w-lg mx-auto">{post.overview}</p>

              <button className="btn-1">
                <a href={`/post/${post.slug.current}`}>Read more</a>
              </button>
            </article>
          </li>
        ))}
      </ul>
    </div>

  );


  
}
