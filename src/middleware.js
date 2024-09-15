import { NextResponse } from "next/server"

const user = false;

export const middleware = (request) => {
    console.log(request.cookies.get('next.js'))
    // if(request.nextUrl.pathname.startsWith('/about'))
    // if (!user) return NextResponse.redirect(new URL('/login', request.url))
    const cookies = request.cookies.get('next.js')
    if (!cookies || cookies.value !== 'next') return NextResponse.redirect(new URL('/login', request.url))

    return NextResponse.next()
}

export const config = {
    // matcher:['/about-us','/contact-us'],
    matcher: '/dashboard',
}