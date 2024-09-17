import Link from "next/link";


const getTime = async () => {
  // const res = await fetch("http://localhost:3000/time", { cache: "no-store"})
  const res = await fetch("http://localhost:3000/time", { next: { revalidate: 5 } })
  const data = await res.json()
  return data.currentTime
}

export default async function Login() {

  const currentTime = await getTime()

  return (
    <div>
      <p>Time: {currentTime}</p>
      <p>
        <button className="btn btn-success btn-outline">Success</button>
      </p>
      <button>
        <Link href={`/login/register`}>Register</Link>
      </button>
    </div>
  )
}
