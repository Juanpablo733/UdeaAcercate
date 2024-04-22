import { PrismaClient } from "@prisma/client"

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
                switch (element.sentiment) {
                    case 'Positive':
                        returned.positive = element._count.id
                        break
                    case 'Negative':
                        returned.negative = element._count.id
                        break
                    case 'Neutral':
                        returned.neutral = element._count.id
                        break
                }

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
