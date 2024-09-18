export const GET = async () => {
    return Response.json({
        users
    })
}

export async function POST(request) {
    const newUser = await request.json();

    users.push({
        id: users.length + 1,
        text: newUser.text
    })

    return Response.json({
        message: "new user added",
        users
    })
}


const users = [
    {
        id: 1,
        title: "this is user"
    },
    {
        id: 2,
        title: "this is user"
    },
    {
        id: 3,
        title: "this is user"
    },
]

