import { PrismaClient } from "@prisma/client";
import prisma from "@/config/prisma"
import { Sentiment } from "@/prisma/generated/client";

export async function deleteAllCommentsFromEvent(db: PrismaClient, eventId: string) {
    const event = await db.event.findUnique({
        where: {
            id: eventId
        }
    })
    await db.comment.deleteMany({
        where: {
            infoId: event.infoId
        }
    });
}

type SentimentJSON = {
    positive: number,
    negative: number,
    neutral: number,
}

export async function saveCommentSentiment(commentId: string, sentiment: SentimentJSON) {
    const sentimentPolarity = getPolarity(sentiment)
    console.log("Sentiment:", sentiment)
    console.log("Polarity:", sentimentPolarity)
    await prisma.commentSentiment.create({
        data: {
            id: commentId,
            sentiment: sentimentPolarity
        }
    })
}

function getPolarity(sentiment: SentimentJSON): Sentiment {
    let polarity: Sentiment = "Neutral"
    if (sentiment.positive == sentiment.negative)
        return polarity
    else if (sentiment.neutral > sentiment.negative || sentiment.neutral > sentiment.positive) {
        if (sentiment.negative >= sentiment.neutral)
            polarity = "Negative"
        else if (sentiment.positive >= sentiment.neutral)
            polarity = "Positive"
        return polarity
    }
    else if (sentiment.positive > sentiment.negative) {
        polarity = "Positive"
    }
    else if (sentiment.negative > sentiment.positive) {
        polarity = "Negative"
    }
    return polarity
}
