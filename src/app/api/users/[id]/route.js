export const PATCH = async (request, { params }) => {
    const body = await request.json()
    const index = users.findIndex(c => c.id === parseInt(params.id))
    users[index] = {
        title: body.title,
    }
    // console.log(index)
    return Response.json({
        message: "updated the user",
        users
    })
}

export const DELETE = async (request,{ params }) => {
    const newUsers = users.filter(v => v.id !== parseInt(params.id))
    return Response.json({
        message: 'user deleted',
        newUsers
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