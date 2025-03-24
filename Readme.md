ติดตั้ง pnpm >>  npm install -g pnpm 
ติดตั้ง package.json >> pnpm init      
ติดตั้ง package ลงใน devDependencies >> pnpm i -D prisma    
ขอคำสั่ง prisma >> npx prisma -help

Examples

      Set up a new Prisma project
      $ prisma init

      Generate artifacts (e.g. Prisma Client)
      $ prisma generate

      Browse your data
      $ prisma studio

      Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
      $ prisma migrate dev

      Pull the schema from an existing database, updating the Prisma schema
      $ prisma db pull

      Push the Prisma schema state to the database
      $ prisma db push

      Validate your Prisma schema
      $ prisma validate

      Format your Prisma schema
      $ prisma format

      Display Prisma version info
      $ prisma version

      Display Prisma debug info
      $ prisma debug

ติดตั้งแบบ global >>  npm i -g prisma 
ถ้าติดตั้งแบบ global แล้ว เขียนคำสั่งแบบนี้ได้เลย >> prisma -h 
Set up a new Prisma project จะได้ folder prisma และ .env file ขึ้นมา >> prisma init 
sync database กับ ตาราง เป็น การ connect database มักผิดตรง Database_URL ใน schema.prima ตาราง User จะไปโผล่ที่ DBeaver  >> prisma db push 

- ตัว client เป็นตัว generate 
generator client {
  provider = "prisma-client-js"
}

- กำหนด Database ที่เราจะเชื่อมต่อ 
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// model User {
//   //field name     //field type       //Attributes 
//   id        Int      @id @default(autoincrement())
//   createdAt DateTime @default(now())
//   email     String   @unique // email ห้ามซ้ำกันในระบบ 
//   name      String?
//   role      Role     @default(USER)
//   post      Post[]
// }

// model Post {
//   id        Int      @id @default(autoincrement())
//   createAt  DateTime @default(now())
//   updateAt  DateTime @updatedAt
//   published Boolean  @default(false)
//   title     String   @db.VarChar(255)
//   authorId  Int?
//   author    User?    @relation(fields: [authorId], references: [id])
//   category  Category[]

//   // @@index([title]) // ช่วยในการค้นหาข้อมูลที่ถูกค้นหาบ่อย 
// }

// model Category {
//   id      Int        @id @default(autoincrement())
//   name    String
//   post    Post[]     
// }

// enum Role {
//   USER
//   ADMIN
// }

// compound unique
// model Person { 
//   id                Int               @id @default(autoincrement())
//   firstname         String            // firstname ซ้ำกันได้ 
//   lastName          String            // lastName ซ้ำกันได้ 

//   @@unique([firstname, lastName]) // แต่ firstname และ lastName รวมกัน แล้วห้ามเหมือนกัน 
// }

// one to one
// model UserProfile { 
//   id              Int               @id @default(autoincrement())
//   profile         Profile?           
// }

// model Profile { 
//   id             Int                @id @default(autoincrement())
//   userId         Int                @unique
//   user           UserProfile        @relation(fields: [userId], references: [id])
// }

// one to many
// model User { 
//   id             Int                @id @default(autoincrement())
//   post           Post[]           
// }

// model Post{ 
//   id             Int                @id @default(autoincrement())
//   authorId       Int                
//   author         User               @relation(fields: [authorId], references: [id])
// }

// many to many แบบ implicit
// model Post {
//   id       Int        @id @default(autoincrement())
//   title    String
//   category Category[]
// }

// model Category {
//   id      Int        @id @default(autoincrement())
//   name    String
//   post    Post[]     
// }

// many to many แบบ explicit
// model Post {
//   id       Int        @id @default(autoincrement())
//   title    String
//   category CategoryOnPosts[]
// }

// model Category {
//   id      Int        @id @default(autoincrement())
//   name    String
//   post    CategoryOnPosts[]     
// }

// model CategoryOnPosts {
//   postId        Int
//   post          Post                 @relation(fields: [postId], references: [id])
//   categoryId    Int
//   category      Category             @relation(fields: [categoryId], references: [id])
//   assignedAt    DateTime             @default(now())
//   assignedBy    String

//   @@id([postId, categoryId])
// }

// self-relations  อ้างอิง model ของตัวมันเอง
// model User {
//   id            Int        @id @default(autoincrement())
//   name          String?   
//   successorId   Int?       @unique
//   successor     User?      @relation("BlogOwnerHistory", fields: [successorId], references: [id])    
//   predecessor   User?      @relation("BlogOwnerHistory")
// }

ลบที่เรา prisma db push (อาจทำให้เกิดการ lost data) ที่เราทำการ push ออกไปก่อน >> prisma migrate reset  
สำหรับการสร้าง Migration ใหม่ และ Generate Client (ไม่ทำให้เกิด data lost) >> prisma migrate dev 
ใช้ render ในการ deploy ฟรี >> ก็ create ตามขั้นตอน 
.env >> pnpm i -D dotenv-cli
      "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
      },
      
      เปลี่ยนเป็น 
      "scripts": {
      "deploy:db": "dotenv -e .env.production -- prisma migrate deploy"
      },

เมื่อเราพัฒนาในเครื่องเรา มันก็จะเป็น .env 
เมื่อเราพัฒนาแบบให้มัน deploy มันก็จะเป็น .env.production ในที่นี้เราใช้ render ในการ deploy 
เอา external url จาก ที่ได้ใน render มาวาง 
รันคำสั่ง เพื่อ deploy งานขึ้น database ในที่นี้คือ render >> pnpm run deploy:db 
















