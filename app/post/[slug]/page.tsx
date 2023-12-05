import { Post } from "@/app/lib/interface";
import { client, getListPost } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { BsFillShareFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

async function getData(slug: string) {
  const query = `*[_type=="post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  return {
    title: data.title,
    description: data.overview,
    alternates: {
      canonical: `/post/${data.slug.current}`,
      languages: {
        "en-US": `/en-US/post/${data.slug.current}`,
      },
    },
  };
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  const PortableTextComp = {
    types: {
      image: ({ value }: { value: any }) => (
        <img
          src={urlFor(value).url()}
          alt=""
          className="w-1/2 h-1/2 mx-auto rounded-lg"
        />
      ),
    },
  };

  const postList = await getListPost();

  return (
    <div>
      <header className="pt-20 space-y-4 mt-12">
        <div className=" max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight text-center mx-4">
            {data.title}
          </h1>
        </div>
        <div>
          <div>
            <p className="text-sm font-light ml-14 text-center">
              Published on{" "}
              {new Date(data._createdAt).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
      </header>

      <div className="flex justify-center items-center pt-10">
        <div className="flex items-center  rounded-full p-2 pr-4">
          <p className="text-sm font-semibold mx-2">Share</p>
          <BsFillShareFill className="" />
        </div>
        <div className="flex text-xl space-x-3 p-1 rounded-lg">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
        </div>
      </div>

      <div className="divide-y divide-gray-200 py-7 max-w-4xl mx-auto">
        <div>
          <div className="m-8 space-y-5 text-ellipsis">
            <PortableText value={data.content} components={PortableTextComp} />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mx-auto bg-gray1 p-4">
        <button className="bg-white p-4 rounded-xl font-semibold hover:bg-green hover:text-white delay-75 duration-75">
          <a href="https://accountingbiz.kartra.com/calendar/On-boarding">
            Request Info or Schedule a Call
          </a>
        </button>
      </div>

      {/* <div
        className="js_kt_asset_embed js_kartra_trackable_object"
        data-kt-type="calendar"
        data-kt-embed="inline"
        data-kt-value="QN6kd34xm8rK"
        data-kt-owner="QpNz8ZpW"
        data-kt-accent="#39b9dd"
      ></div>
      <script
        type="text/javascript"
        src="https://app.kartra.com/js/build/front/embed/calendar.js"
      ></script> */}

      <hr className="mx-10" />
      <h1 className="text-center my-10 text-2xl font-extrabold text-green">
        Recent Posts
      </h1>

      <div className="flex flex-col justify-center items-center mx-auto space-x-0 mb-12 max-w-lg md:flex-row md:space-x-8 md:max-w-5xl xl:max-w-full xl:mx-20">
        {postList.map((post) => (
          <li
            key={post._id}
            className="my-4 mx-auto w-5/6 text-center border-black border-2 rounded-lg list-none"
          >
            <article className=" h-44 md:h-52 flex flex-col justify-center items-center relative">
              <div className="bg-gold p-1 absolute -top-3 w-20 rounded-sm font-bold text-sm">
                new
              </div>
              <div className="bg-gold w-1 fixed top-0 bottom-0 left-0"></div>

              <Link href={`/post/${post.slug.current}`} prefetch className="">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold leading-normal">
                    {post.title}
                  </h3>
                </div>
              </Link>

              <Link href={`/post/${post.slug.current}`}>
                <button className="btn-1">Read article</button>
              </Link>
            </article>
          </li>
        ))}
      </div>
    </div>
  );
}
