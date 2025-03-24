import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { prisma } from './prisma' // import จากไฟล์  prisma.ts 

// const prisma = new PrismaClient() // เอาออก เพราะว่าไปดึงเอาจากไฟล์ prisma.ts มาแทน 

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
    return c.json({ message : 'User created'})
})

app.put('/admin/change-user-password/:userId', async (c) => { 
    const userId = parseInt(c.req.param('userId'))
    const json = await c.req.json() as { password : string }
    await prisma.user.update({ 
        where : { id : userId}, 
        data : { 
            password : json.password, 
        }
    })
    return c.json({ message : 'User password changed'})
})

serve(app)