
const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data
}


export default async function Posts() {
    const Data = await getPosts();
    console.log(Data)
    return (
        <div className="grid grid-cols-4 gap-10">
            {
                Data?.map(({ title, body }, idx) => <div key={idx} className="p-6 border-2 rounded-xl border-black">
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>)
            }
        </div>
    )
}
