import Link from "next/link";

// Manual meta data set dif page
// export const metadata = {
//     title: "NEXT | POST",
//     description: "Post page",
// };

export const metadata = {
    // dynamic setup
    title: "Post",
    // title: { // for uniq data show
    //     absolute: 'only this text show'
    // },
    description: "Post page",
    keywords: ['proactive']
};


const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data
}


export default async function Posts() {
    const Data = await getPosts();


    return (
        <div className="grid grid-cols-4 gap-10">
            {
                Data?.map(({ title, body, id }, idx) => <Link href={`/posts/${id}`} key={idx} className="p-6 border-2 rounded-xl border-black">
                    <h1>{title}</h1>
                    <p>{body}</p>
                </Link>)
            }
        </div>
    )
}
