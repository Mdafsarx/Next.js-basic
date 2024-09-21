import connectDB from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async ( request ) => {
    const newUser = await request.json();
    try {

        const DB = await connectDB();
        const userCollection = DB.collection('users');
        const exist = await userCollection.findOne({ email: newUser.email })
        if (exist) {
            return Response.json({ message: 'email already used' })
        }
        const hash = bcrypt.hashSync(newUser.password, 14);

        const res = await userCollection.insertOne({...newUser,password:hash});
        return Response.json({ message: 'user created' })

    } catch (error) {
        return Response.json({ message: 'error' }, error)

    }
} 