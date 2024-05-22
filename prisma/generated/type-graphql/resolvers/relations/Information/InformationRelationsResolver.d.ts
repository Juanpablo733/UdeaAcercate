import type { GraphQLResolveInfo } from "graphql";
import { Comment } from "../../../models/Comment";
import { Event } from "../../../models/Event";
import { Information } from "../../../models/Information";
import { InformationCommentsArgs } from "./args/InformationCommentsArgs";
import { InformationEventArgs } from "./args/InformationEventArgs";
export declare class InformationRelationsResolver {
    comments(information: Information, ctx: any, info: GraphQLResolveInfo, args: InformationCommentsArgs): Promise<Comment[]>;
    event(information: Information, ctx: any, info: GraphQLResolveInfo, args: InformationEventArgs): Promise<Event | null>;
}
