import { Post } from "@/app/lib/interface";
import {client} from "@/app/lib/sanity"
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";

async function getData(slug: string){
    const query = `*[_type=="post" && slug.current == "${slug}"][0]`

    const data = await client.fetch(query);

    return data;
}

export default async function SlugPage({params}: {params: {slug: string}}){
    const data = (await getData(params.slug)) as Post;

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

                <div className="">
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
                    <div className="m-8 space-y-5">
                        
                        <PortableText value={data.content} components={PortableTextComp}/>
                    </div>
                </div>
            </div>
        </div>
    )
}