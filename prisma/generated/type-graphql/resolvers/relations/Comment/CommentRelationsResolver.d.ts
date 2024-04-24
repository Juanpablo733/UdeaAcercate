import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Information } from "../../../models/Information";
import { User } from "../../../models/User";
export declare class CommentRelationsResolver {
    user(comment: Comment, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    info(comment: Comment, ctx: any, info: GraphQLResolveInfo): Promise<Information>;
}
