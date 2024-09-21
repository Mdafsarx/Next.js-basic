import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({

    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'username', type: 'text', placeholder: 'enter your name', required: true },
                password: { label: 'password', type: 'password', placeholder: 'enter your password' , required: true }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null
                }
                return true
            }
        })
    ],
})

export { handler as POST , handler as GET }