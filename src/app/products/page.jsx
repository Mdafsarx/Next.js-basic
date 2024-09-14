import Link from "next/link"
export default function Products() {
  
  const products = [
    {
      "id": "1",
      "title": "Introduction to Next.js",
      "description": "Learn the basics of Next.js and its features.",
      "author": "John Doe"
    },
    {
      "id": "2",
      "title": "Mastering Dynamic Routing in Next.js",
      "description": "A comprehensive guide on how to implement dynamic routing in Next.js.",
      "author": "Jane Smith"
    },
    {
      "id": "3",
      "title": "Server-side Rendering in Next.js",
      "description": "Understanding the benefits of server-side rendering and how to use it in Next.js.",
      "author": "Mike Johnson"
    },
    {
      "id": "4",
      "title": "API Routes in Next.js",
      "description": "Learn how to create and handle API routes within Next.js applications.",
      "author": "Emily Clark"
    },
    {
      "id": "5",
      "title": "Deploying Next.js Applications",
      "description": "Step-by-step guide on how to deploy your Next.js app to Vercel, Netlify, and other platforms.",
      "author": "Robert Williams"
    },
    {
      "id": "6",
      "title": "Working with Static Files in Next.js",
      "description": "Learn how to manage static files like images and fonts in your Next.js application.",
      "author": "Anna Baker"
    },
    {
      "id": "7",
      "title": "Building a Blog with Next.js and Markdown",
      "description": "Create a simple blog using Next.js and Markdown for content management.",
      "author": "Chris Lee"
    },
    {
      "id": "8",
      "title": "Handling Authentication in Next.js",
      "description": "Implementing user authentication in Next.js using JWT or third-party providers.",
      "author": "Sophia Brown"
    },
    {
      "id": "9",
      "title": "Next.js with Tailwind CSS",
      "description": "Learn how to integrate Tailwind CSS with Next.js for efficient styling.",
      "author": "David Wilson"
    },
    {
      "id": "10",
      "title": "Optimizing Images in Next.js",
      "description": "Discover how to use Next.js's built-in image optimization features.",
      "author": "Isabella Martin"
    }
  ]

  return (
    <div>

      <p className="text-center text-4xl text-blue-800 border-b-2 border-black border-dashed pb-4">
        Product's
        <span className="ml-20 text-black hover:underline"><Link href={'/products/topproducts'}>Top products</Link></span>
      </p>
      
      {
         products.map((data,idx)=><div className="text-black p-6 my-4 border-2 border-black rounded-2xl">
          <p className="text-lg font-bold">{data.title}</p>
          <p className="text-gray-900">{data.description}</p>
          <Link className="bg-blue-800 p-0.5 px-3 rounded-xl text-white" href={`/products/${data.id}`}>{data.author}</Link>
         </div>)
      }
    </div>
  )
}



