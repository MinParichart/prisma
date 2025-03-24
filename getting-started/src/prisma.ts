import { Prisma, PrismaClient } from "@prisma/client";
import { hash } from '@node-rs/argon2'

const hashPassword = Prisma.defineExtension({
    name : 'hashPassword', 
    query  :{ 
        user : { 
            async create ({ args, query }) { 
                if (args.data.password) { 
                    args.data.password = await hash(args.data.password)
                }
                console.log(args.data)
                return query(args)
            }
        }
    }
})

export const prisma = new PrismaClient()
    .$extends(hashPassword)


