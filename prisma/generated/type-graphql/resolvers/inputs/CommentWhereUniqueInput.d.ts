import { CommentWhereInput } from "../inputs/CommentWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EventRelationFilter } from "../inputs/EventRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class CommentWhereUniqueInput {
    id?: string | undefined;
    AND?: CommentWhereInput[] | undefined;
    OR?: CommentWhereInput[] | undefined;
    NOT?: CommentWhereInput[] | undefined;
    text?: StringFilter | undefined;
    dateTime?: DateTimeFilter | undefined;
    userId?: StringFilter | undefined;
    eventId?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    event?: EventRelationFilter | undefined;
}
