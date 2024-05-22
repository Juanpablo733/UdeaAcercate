import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class EmailTokenWhereInput {
    AND?: EmailTokenWhereInput[] | undefined;
    OR?: EmailTokenWhereInput[] | undefined;
    NOT?: EmailTokenWhereInput[] | undefined;
    identifier?: StringFilter | undefined;
    token?: StringFilter | undefined;
    expires?: DateTimeFilter | undefined;
}
