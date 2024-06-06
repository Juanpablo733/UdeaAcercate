import { Role } from "@/prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client";

export async function isAdminUser(db: PrismaClient, userId: String): Promise<boolean> {
    const userRole = await db.role.findUnique({
        where: {
            userId: userId
        }
    })
    if (userRole?.role === "Admin") return true
    else return false
}

export async function createAdminRole(db: PrismaClient, userId: String) {
    try {
        await db.role.create({
            data: {
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