import { Prisma, PrismaClient } from "@prisma/client";

const hashPassword = Prisma.defineExtension({
    name : 'hashPassword', 
    query  :{ 
        user : { 
            create ({ args, query }) { 
                console.log(args.data)
                return query(args)
            }
        }
    }
})

export const prisma = new PrismaClient()
    .$extends(hashPassword)


