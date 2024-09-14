"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";

export default function Header() {

  const pathName = usePathname();
  const routerLink = useRouter()  // useNavigate()
  const navLink = [
    {
      path: '/about',
      title: 'About'
    },
    {
      path: '/products',
      title: 'products'
    },
    {
      path: '/contact',
      title: 'Contact'
    },
    {
      path: '/',
      title: 'Home'
    }
  ];


  const handle = () => {
    routerLink.push('/login')
  }

  // simple layout logic for dashboard
  if (pathName.includes('/dashboard')) {
    return (
      <div className="bg-red-700 p-6 text-white text-center font-bold">
        this is dashboard
      </div>
    )
  }

  return (
    <header>

      <nav className="relative bg-slate-200 shadow">

        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a >
              <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:flex md:items-center`}
          >

            <div className="flex flex-col md:flex-row md:mx-6 text-black font-bold">
              {
                navLink?.map((link, idx) => <Link href={link.path} key={idx} className={`my-2 md:mx-4 md:my-0 ${pathName === link.path && 'text-white underline'}`}>{link?.title}</Link>)
              }
            </div>

            <button onClick={handle} className="text-white font-bold bg-black p-1.5 rounded-xl hover:cursor-pointer">
              Login
            </button>

          </div>
        </div>

      </nav>

    </header>
  )
}
