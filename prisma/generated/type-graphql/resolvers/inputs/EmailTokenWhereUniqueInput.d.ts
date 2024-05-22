import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EmailTokenWhereInput } from "../inputs/EmailTokenWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class EmailTokenWhereUniqueInput {
    identifier?: string | undefined;
    AND?: EmailTokenWhereInput[] | undefined;
    OR?: EmailTokenWhereInput[] | undefined;
    NOT?: EmailTokenWhereInput[] | undefined;
    token?: StringFilter | undefined;
    expires?: DateTimeFilter | undefined;
}
