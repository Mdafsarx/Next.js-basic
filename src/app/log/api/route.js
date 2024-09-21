import connectDB from "@/lib/connectDB";

export const POST = async ( request ) => {
    const newUser = await request.json();
    try {

        const DB = await connectDB();
        const userCollection = DB.collection('users');
        const exist = await userCollection.findOne({ email: newUser.email })
        if (exist) {
            return Response.json({ message: 'email already used' })
        }
        const res = await userCollection.insertOne(newUser);
        return Response.json({ message: 'user created' })

    } catch (error) {
        return Response.json({ message: 'error' }, error)

    }
} 