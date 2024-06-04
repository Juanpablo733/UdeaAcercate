import { Role } from "@/prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client";

export async function getRole(db: PrismaClient, userId: String): Promise<Role>{
    return await db.role.findUnique({
        where: {
            userId: userId
        }
    })
}

export async function createAdminRole(db: PrismaClient, userId: String){
    try {
        await db.role.create({
            data:{
                role: "Admin",
                userId: userId
            }
        })
    } catch (error) {
        console.log(error)
        return false
    }
    return true
}