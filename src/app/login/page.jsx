import Link from "next/link";

export default function Login() {
  return (
    <div>
      <p>
        This is Login page
      </p>
      <button>
        <Link href={`/login/register`}>Register</Link>
      </button>
    </div>
  )
}
