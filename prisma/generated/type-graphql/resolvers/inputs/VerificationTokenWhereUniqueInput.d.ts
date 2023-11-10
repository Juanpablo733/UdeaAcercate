import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VerificationTokenWhereInput } from "../inputs/VerificationTokenWhereInput";
export declare class VerificationTokenWhereUniqueInput {
    identifier?: string | undefined;
    AND?: VerificationTokenWhereInput[] | undefined;
    OR?: VerificationTokenWhereInput[] | undefined;
    NOT?: VerificationTokenWhereInput[] | undefined;
    token?: StringFilter | undefined;
    expires?: DateTimeFilter | undefined;
}
