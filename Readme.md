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

























