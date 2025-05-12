import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: ['query', 'error', 'warn'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Add error handling middleware
prisma.$use(async (params, next) => {
  try {
    const result = await next(params)
    return result
  } catch (error) {
    console.error('Prisma Error:', error)
    throw error
  }
}) 