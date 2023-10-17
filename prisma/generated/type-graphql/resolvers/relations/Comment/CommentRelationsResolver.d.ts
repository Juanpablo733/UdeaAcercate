import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Event } from "../../../models/Event";
import { User } from "../../../models/User";
export declare class CommentRelationsResolver {
    user(comment: Comment, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    event(comment: Comment, ctx: any, info: GraphQLResolveInfo): Promise<Event>;
}
