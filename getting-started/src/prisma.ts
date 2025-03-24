import { Prisma, PrismaClient } from "@prisma/client";
import { hash } from '@node-rs/argon2'

const hashPassword = Prisma.defineExtension({
	name: 'hashPassword',
	query: {
		user: {
			async create({ args, query }) {  // hash password ที่ถูก create
				if (args.data.password) {
					args.data.password = await hash(args.data.password)
				}
				console.log(args.data)
				return query(args)
			},
			async update({ args, query }) { // hash password ที่ถูก update
				if (args.data.password && typeof args.data.password === 'string') {
					args.data.password = await hash(args.data.password)
				}
				console.log(args.data)
				return query(args)
			},
		}
	}
})

const getEmptyUserName = Prisma.defineExtension({
	name: 'getEmptyUserName',
	model: {
		user: {
			async findEnptyName() {
				return await prisma.user.findMany({
					select: { // select เลือกเอามาเฉพาะ id email name 
						id: true,
						email: true,
						name: true
					},
					where: { // ค้นหาที่ name เป็น null หรือว่า ''
						OR: [
							{ name: null },
							{ name: '' }
						]
					}
				})
			}
		}
	}
})



export const prisma = new PrismaClient()
	.$extends(hashPassword)
	.$extends(getEmptyUserName)


