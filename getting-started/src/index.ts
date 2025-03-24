import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = new Hono(); 

app.get('/', (c ) => { 
    return c.json({message : 'Hello World'})
})

app.post('/sign-up', async (c) => { 
    const json = await c.req.json() // รับ req ที่ส่งเข้ามา 
    await prisma.user.create ({
        data : { 
            email : json.email, 
            password : json.password,
        }
    })
    prisma.user.findMany({
        where : { 
            email : {
               contains : 'min',
            },
        }
    })
    return c.json({ message : 'User created'})
})

serve(app)