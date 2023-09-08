// import { urlFor } from "@/app/lib/sanityImageUrl";
import Link from "next/link";
import { getPosts } from "./lib/sanity";
import Image from "next/image";

export default async function Home() {
  const data = await getPosts();

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

      <ul className="lg:grid lg:grid-cols-2">
        {data.map((post) => (
          <li
            key={post._id}
            className=" my-4 mx-auto w-5/6 text-center border-gray1 border-2 rounded-md"
          >
            <article className="space-y-8 py-4">
              <Link href={`/post/${post.slug}`} prefetch className="">
                <div>
                  <h3 className="text-4xl font-bold px-4 pt-2">{post.title}</h3>
                </div>
              </Link>

              <div>
                <p>
                  Published:{" "}
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>

              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={350}
                  height={100}
                  className="mx-auto rounded-md"
                />
              )}

              <p className="max-w-lg mx-auto px-4">{post.overview}</p>

              <button className="btn-1">
                <Link href={`/post/${post.slug}`}>Read more</Link>
              </button>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
