const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function Home() {
  
  const users = await prisma.user.findMany()
  
  console.log(users)
  return users[0].email
}

export default Home;