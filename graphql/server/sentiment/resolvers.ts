import { Resolver } from "@/types";
import { saveCommentSentiment } from "../utils/commentUtil";
import { getCommentSentimentCount, getConfidenceAverage } from "../utils/commentSentimentUtil";
import { GenerateAndSaveSentiment } from "@/util/chatgpt";

const sentimentResolvers: Resolver = {
    Query: {
        commentSentimentCount: async (parent, args, context) => {
            return getCommentSentimentCount(context.db)
        },
        commentSentimentConfidenceAverage: async (parent, args, context) => {
            return getConfidenceAverage(context.db)
        }
    },
    Mutation: {
        classifyCommentSentiment: async (parent, args, context) => {
            const { db } = context
            const commentSentiment = await context.db.commentSentiment.findUnique({ where: { id: args.commentId } })
            if (commentSentiment) {
                console.log("Este comentario ya fue analizado")
                return false
            }

            const comment = await db.comment.findUnique({ where: { id: args.commentId } })
            const info = await db.information.findUnique({ where: { id: comment.infoId } })
            if (comment) {
                console.log(comment)
                const responseJSON = await GenerateAndSaveSentiment(comment.text)
                await saveCommentSentiment(args.commentId, info.tag, JSON.parse(responseJSON))
                return true
            }
            console.log("No hay un comentario con este id")
            return false
        },
    }
}

export { sentimentResolvers }