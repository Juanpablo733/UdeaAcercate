import { InformationOrderByWithRelationInput } from "../inputs/InformationOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class CommentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    dateTime?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    infoId?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    info?: InformationOrderByWithRelationInput | undefined;
}
