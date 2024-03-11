import { PrismaClient } from "@/prisma/generated/client";

declare global {
  // eslint-disable-next-line no-unused-vars
  var prismaGlobal: PrismaClient;
}

let prisma: PrismaClient;
// check to use this workaround only in development and not in production
if (process.env.VERCEL_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prismaGlobal) {
    global.prismaGlobal = new PrismaClient();
  }
  prisma = global.prismaGlobal;
}
export default prisma;