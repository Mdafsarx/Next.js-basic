
const thisPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
}


export default async function page({ params }) {
    const { title, body } = await thisPost(params?.id);
    
    return (
        <div className="border-2 border-blue-700 p-10 space-y-4 rounded-xl">
            <p>{title}</p>
            <h1>{body}</h1>
        </div>
    )
}
