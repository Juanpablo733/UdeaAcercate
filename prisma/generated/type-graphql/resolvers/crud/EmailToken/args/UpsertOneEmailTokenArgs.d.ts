import { EmailTokenCreateInput } from "../../../inputs/EmailTokenCreateInput";
import { EmailTokenUpdateInput } from "../../../inputs/EmailTokenUpdateInput";
import { EmailTokenWhereUniqueInput } from "../../../inputs/EmailTokenWhereUniqueInput";
export declare class UpsertOneEmailTokenArgs {
    where: EmailTokenWhereUniqueInput;
    create: EmailTokenCreateInput;
    update: EmailTokenUpdateInput;
}
