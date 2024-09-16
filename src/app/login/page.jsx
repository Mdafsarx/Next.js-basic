import Link from "next/link";

export default function Login() {
  return (
    <div>
      <p>
        <button className="btn btn-success btn-outline">Success</button>
      </p>
      <button>
        <Link href={`/login/register`}>Register</Link>
      </button>
    </div>
  )
}
