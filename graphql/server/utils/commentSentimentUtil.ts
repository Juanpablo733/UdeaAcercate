import { PrismaClient } from "@prisma/client"

export async function getConfidenceAverage(db: PrismaClient){
    const confienceAverageSentiment = await getConfidenceAverageBySentiment(db)
    const confienceAverageFormatted = formatConfidenceAverage(confienceAverageSentiment)
    return confienceAverageFormatted
}

async function getConfidenceAverageBySentiment(db: any) {
    return await db.commentSentiment.groupBy({
        by: ['sentiment'],
        _avg: {
            confidence: true
        }
    })
}

function formatConfidenceAverage(commentsGroupedBySentiment: any) {
    const confienceAverageFormatted = { positive: 0, negative: 0, neutral: 0, }
    commentsGroupedBySentiment.forEach((element) => {
        confienceAverageFormatted[element.sentiment.toLowerCase()] = element._avg.confidence.toPrecision(3)
    })
    return confienceAverageFormatted
}

export async function getCommentSentimentCount(db: PrismaClient) {
    const sentimentCount = await getCommentSentimentsGrouped(db)
    const sentimentCountFormatted = { positive: 0, negative: 0, neutral: 0, }
    fillSentimentCount(sentimentCount, sentimentCountFormatted)
    return sentimentCountFormatted
}

function fillSentimentCount(sentimentCount: any, returned: { positive: number; negative: number; neutral: number }) {
    if (sentimentCount) {
        sentimentCount.forEach(
            (element) => {
                returned[element.sentiment.toLowerCase()] = element._count.id
            }
        )
    }
}

function getCommentSentimentsGrouped(db: any) {
    return db.commentSentiment.groupBy({
        by: ['sentiment'],
        _count: {
            id: true
        }
    })
}
