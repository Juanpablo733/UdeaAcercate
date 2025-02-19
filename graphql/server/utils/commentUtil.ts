import { PrismaClient } from "@prisma/client";
import prisma from "@/config/prisma"
import { Sentiment, Tag } from "@/prisma/generated/client";
import { Context } from "@/types";

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

export async function saveCommentSentiment(commentId: string, commentTag: Tag, sentiment: SentimentJSON) {
    const selectedSentiment = selectSentiment(sentiment)
    console.log("Sentiment:", sentiment)
    console.log("Polarity, Confidence:", selectedSentiment)
    await prisma.commentSentiment.create({
        data: {
            id: commentId,
            sentiment: selectedSentiment.polarity,
            confidence: selectedSentiment.confidence,
            commentTag: commentTag
        }
    })
}

function selectSentiment(sentiment: SentimentJSON): { polarity: Sentiment, confidence: number } {
    let polarity: Sentiment = "Neutral"
    if (sentiment.positive != sentiment.negative) {
        if (sentiment.neutral > sentiment.negative || sentiment.neutral > sentiment.positive) {
            if (sentiment.negative >= sentiment.neutral)
                polarity = "Negative"
            else if (sentiment.positive >= sentiment.neutral)
                polarity = "Positive"
        }
        else if (sentiment.positive > sentiment.negative) {
            polarity = "Positive"
        }
        else if (sentiment.negative > sentiment.positive) {
            polarity = "Negative"
        }
    }
    const confidence: number = sentiment[polarity.toLowerCase()]
    return { polarity, confidence }
}

export async function resolveEvent(eventId: string, context: Context) {
    const { db } = context;
    const event = db.event.findUnique({
        where: {
            id: eventId
        }
    })
    return event;
}