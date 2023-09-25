const Prisma = require("@prisma/client");
const prisma = new Prisma.PrismaClient();

const create = async() => {
    const newUser = await prisma.user.create({
        data: {
        username : 'torshort',
        password : 'adminapes',
        email : 'tor@apes.com'
        },
    });

    return newUser
};

create().then((res) => console.log(res));
