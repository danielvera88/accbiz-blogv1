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

      <ul className="lg:grid lg:grid-cols-3">
        {data.map((post) => (
          <li
            key={post._id}
            className=" my-4 mx-8 text-center rounded-xl space-y-8"
          >
            <article className="space-y-4 pb-4">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={350}
                  height={100}
                  className=" rounded-md mx-auto mt-2 object-fill"
                />
              )}
              <Link href={`/post/${post.slug}`} prefetch>
                <div className="mx-auto max-w-sm">
                  <h3 className="text-4xl font-bold px-4 mt-4">{post.title}</h3>
                </div>
              </Link>

              <div>
                <p className="text-sm font-light">
                  Published:{" "}
                  {new Date(post._createdAt).toISOString().split("T")[0]}
                </p>
              </div>

              <button className="btn-1">
                <Link href={`/post/${post.slug}`}>Read more</Link>
              </button>
              <div className="bg-gray2 w-20 h-1 rounded-2xl mx-auto" />
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
